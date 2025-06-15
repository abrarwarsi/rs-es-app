import express from 'express';
import cors from 'cors';
import playersRouter from './routes/players.route';
import errorHandler from './middlewares/error.middleware';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', playersRouter);
app.use(errorHandler);

export = app;

// For local only
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
