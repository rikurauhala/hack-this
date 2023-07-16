import { Request, Response } from 'express';
import Router from 'express-promise-router';
import { db } from '../db';
import bcrypt from 'bcrypt';
import { validateUsername } from '../utils/validators';

const registerRouter = Router();

registerRouter.post('/', async (request: Request, response: Response) => {
  try {
    const username = request.body.username as string;
    const usernameValid = validateUsername(username);
    if (!usernameValid.valid) {
      response.status(400).json({ message: usernameValid.errorMessage });
    }
    const password = request.body.password as string;

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.registerUser(username, hashedPassword);
    console.log('Registration successful');
    response.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Error during registration:', error);
    response.status(500).json({ message: 'Error during registration' });
  }
});

export default registerRouter;
