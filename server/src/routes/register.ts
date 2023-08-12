import { Request, Response } from 'express';
import Router from 'express-promise-router';
import { db } from '../db';
import { validatePassword, validateUsername } from '../utils/validators';

const registerRouter = Router();

registerRouter.post('/', async (request: Request, response: Response) => {
  const username = request.body.username as string;
  const usernameValid = validateUsername(username);
  if (!usernameValid.valid) {
    return response.status(400).json({ message: usernameValid.errorMessage });
  }
  if (await db.usernameIsTaken(username)) {
    return response.status(400).json({ message: 'This username is already taken' });
  }

  const password = request.body.password as string;
  const passwordValid = validatePassword(password);
  if (!passwordValid.valid) {
    return response.status(400).json({ message: passwordValid.errorMessage });
  }

  await db.registerUser(username, password);
  console.log('Registration successful');
  return response.status(201).json({ message: 'Registration successful' });
});

export default registerRouter;
