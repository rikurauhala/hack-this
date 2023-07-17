import { Express } from 'express';
import { API_BASE_PATH } from '../utils/config';
import loginRouter from './login';
import registerRouter from './register';

const mountRoutes = (app: Express) => {
  app.use(API_BASE_PATH + 'login', loginRouter);
  app.use(API_BASE_PATH + 'register', registerRouter);
};

export default mountRoutes;
