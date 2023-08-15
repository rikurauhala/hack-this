import { Request, Response } from 'express';
import Router from 'express-promise-router';
import * as jwt from 'jsonwebtoken';
import { db } from '../db';
import { SECRET } from '../utils/config';

const messagesRouter = Router();

messagesRouter.get('/', async (_request: Request, response: Response) => {
  const allMessages = await db.getAllMessages();
  return response.status(200).json(allMessages);
});

messagesRouter.post('/', async (request: Request, response: Response) => {
  try {
    const decodedToken = jwt.verify(request.token as string, SECRET) as jwt.JwtPayload;
    const userId = decodedToken.id as string;

    if (!userId) {
      return response.status(401).json({ error: 'Token missing or invalid!' });
    }

    const message = request.body.message as string;

    if (!message) {
      return response.status(400).json({ message: 'Message required' });
    }

    const createdAt = new Date().toISOString();
    const insertedMessage = await db.insertMessage(message, createdAt, userId);
    return response.status(201).json(insertedMessage);
  } catch (error) {
    return response.status(401).json({ error: 'Token missing or invalid!' });
  }
});

messagesRouter.delete('/:messageId', async (request: Request, response: Response) => {
  try {
    const decodedToken = jwt.verify(request.token as string, SECRET) as jwt.JwtPayload;
    const userId = decodedToken.id as string;

    if (!userId) {
      return response.status(401).json({ error: 'Token missing or invalid!' });
    }

    const messageId = request.params.messageId;

    if (!messageId) {
      return response.status(400).json({ message: 'Message ID required' });
    }

    const deletedMessage = await db.deleteMessage(parseInt(messageId));

    if (!deletedMessage) {
      return response.status(404).json({ error: 'Message not found or unauthorized' });
    }

    return response.status(200).json({ message: 'Message deleted successfully' });
  } catch (error) {
    return response.status(401).json({ error: 'Token missing or invalid!' });
  }
});

export default messagesRouter;
