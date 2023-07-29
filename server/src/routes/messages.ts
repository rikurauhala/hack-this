import { Request, Response } from 'express';
import Router from 'express-promise-router';
import { db } from '../db';

const messagesRouter = Router();

messagesRouter.get('/', async (_request: Request, response: Response) => {
  try {
    const allMessages = await db.getAllMessages();
    return response.status(200).json(allMessages);
  } catch (error) {
    console.error('Error while fetching messages:', error);
    return response.status(500).json({ message: 'Error while fetching messages' });
  }
});

messagesRouter.post('/', async (request: Request, response: Response) => {
  try {
    const userId = request.body.userId as string;
    const message = request.body.message as string;

    if (!userId) {
      return response.status(400).json({ message: 'User id required' });
    }

    if (!message) {
      return response.status(400).json({ message: 'Message required' });
    }

    const createdAt = new Date().toISOString();
    const insertedMessage = await db.insertMessage(message, createdAt, userId);
    return response.status(201).json(insertedMessage);
  } catch (error) {
    console.error('Error during posting a new message:', error);
    return response.status(500).json({ message: 'Error during posting a new message' });
  }
});

export default messagesRouter;
