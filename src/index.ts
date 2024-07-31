import express from 'express';
import dotenv from 'dotenv';
import bookRoutes from './routes/bookRoutes';
import authorRoutes from './routes/authorRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/books', bookRoutes);
app.use('/authors', authorRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

