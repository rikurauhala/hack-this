import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import path from 'path';
import mountRoutes from './routes';
import * as middleware from './utils/middleware';
import { PORT } from './utils/config';
import * as logger from './utils/logger';

const app = express();
app.use(express.json());
app.use(cors());
app.use(middleware.requestLogger);
app.use(middleware.tokenExtractor);
app.use(middleware.userExtractor);

mountRoutes(app);

if (process.env.NODE_ENV === 'production') {
  const staticPath = path.join(__dirname, 'web');
  app.use(express.static(staticPath));
  app.use((_request, response) => {
    response.sendFile(path.resolve(staticPath, 'index.html'));
  });
}

app.use(middleware.errorHandler);
app.use(middleware.unknownEndpoint);

app.listen(PORT, () => {
  logger.logInfo(`Server running on port ${PORT}`);
});
