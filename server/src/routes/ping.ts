import Router from 'express-promise-router';
import { db } from '../db';
const pingRouter = Router();

pingRouter.get('/', async (_request, response) => {
  try {
    const result = await db.executeQuery('SELECT 1');
    response.send(result);
  } catch (error) {
    response.status(500).send('Error executing query');
  }
});

export default pingRouter;
