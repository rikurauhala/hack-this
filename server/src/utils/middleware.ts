import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { db } from '../db';
import { User } from '../types';
import { SECRET } from './config';
import { logError } from './logger';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      token?: string | null;
      user?: User | null;
    }
  }
}

interface Error {
  name: string;
  message: string;
}

export const errorHandler = (error: Error, _request: Request, response: Response, next: NextFunction): void => {
  const errorMessage = error.message;
  logError(errorMessage);

  switch (error.name) {
    case 'CastError':
      response.status(400).json({ error: 'Malformatted id' });
      break;
    case 'ValidationError':
      response.status(400).json({ error: errorMessage });
      break;
    case 'JsonWebTokenError':
      response.status(401).json({ error: 'Invalid token' });
      break;
    case 'TypeError':
      response.status(400).json({ error: errorMessage });
      break;
    default:
      next(error);
  }
};

export const tokenExtractor = (request: Request, _response: Response, next: NextFunction): void => {
  const authorization = request.get('authorization');
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    request.token = authorization.substring(7);
  } else {
    request.token = null;
  }
  next();
};

export const unknownEndpoint = (_request: Request, response: Response): void => {
  response.status(404).json({ error: 'Unknown endpoint' });
};

export const userExtractor = async (request: Request, _response: Response, next: NextFunction): Promise<void> => {
  const token = request.token as string;
  if (!token) {
    request.user = null;
  } else {
    const decodedToken = jwt.verify(token, SECRET) as { id: number };
    if (!decodedToken.id) {
      request.user = null;
    } else {
      request.user = await db.getUserById(decodedToken.id);
    }
  }
  next();
};
