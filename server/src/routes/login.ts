import bcrypt from 'bcrypt';
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

  const user: User | null = await db.getUser(username);

  if (!user) {
    return response.status(401).json({ message: 'This user does not exist' });
  }

  const passwordCorrect = await bcrypt.compare(password, user.passwordHash);

  if (!passwordCorrect) {
    return response.status(401).json({ message: 'Incorrect password' });
  }

  const userForToken = {
    admin: user.admin,
    id: user.id,
    username: user.username,
  };

  const token = jwt.sign(userForToken, SECRET);

  const userJson = {
    admin: user.admin,
    id: user.id,
    token: token,
    username: user.username
  };

  return response.status(200).json(userJson);
});

export default loginRouter;
