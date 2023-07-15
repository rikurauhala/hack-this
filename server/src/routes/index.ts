import { Express } from 'express';
import { API_BASE_PATH } from '../utils/config';
import pingRouter from './ping';

const mountRoutes = (app: Express) => {
  app.use(API_BASE_PATH + 'ping', pingRouter);
};

export default mountRoutes;
