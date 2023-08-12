import { Request, Response } from 'express';
import Router from 'express-promise-router';
import jwt from 'jsonwebtoken';
import { SECRET } from '../utils/config';
import { db } from '../db';
import { User } from '../types';

const loginRouter = Router();

loginRouter.post('/', async (request: Request, response: Response) => {
  const username = request.body.username as string;
  const password = request.body.password as string;

  const user: User | null = await db.getUser(username, password);

  if (!user) {
    return response.status(401).json({ message: 'Invalid username or password' });
  }

  const userForToken = {
    username: user.username,
    id: user.id,
  };

  const token = jwt.sign(userForToken, SECRET);

  const userJson = {
    id: user.id,
    token: token,
    username: user.username
  };

  return response.status(200).json(userJson);
});

export default loginRouter;
