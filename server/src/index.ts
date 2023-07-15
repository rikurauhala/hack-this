import express from 'express';
import cors from 'cors';
import path from 'path';

import mountRoutes from './routes';
import { API_BASE_PATH, PORT } from './utils/config';

const app = express();
app.use(express.json());
app.use(cors());

mountRoutes(app);

app.use(API_BASE_PATH + '*', (_request, response) => {
  response.send('Not found!');
});

if (process.env.NODE_ENV === 'production') {
  const staticPath = path.join(__dirname, 'web');
  app.use(express.static(staticPath));
  app.use((_request, response) => {
    response.sendFile(path.resolve(staticPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
