import { Request, Response } from 'express';
import Router from 'express-promise-router';
import jwt from 'jsonwebtoken';
import { SECRET } from '../utils/config';
import { db } from '../db';
import { User } from '../types';

const loginRouter = Router();

loginRouter.post('/', async (request: Request, response: Response) => {
  try {
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

    return response
      .status(200)
      .json({
        id: user.id,
        token: token,
        username: user.username
      });
  } catch (error) {
    console.error('Error during login:', error);
    return response.status(500).json({ message: 'Error during login' });
  }
});

export default loginRouter;
