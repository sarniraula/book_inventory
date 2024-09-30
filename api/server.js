import express from 'express';
import { initDb } from './db.js';
import bookRoutes from './routes/bookRoute.js';

const app = express();
const port = 3000;

(async () => {
  await initDb();

  app.use(express.json());

  app.use('/api/books', bookRoutes);

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
})();
