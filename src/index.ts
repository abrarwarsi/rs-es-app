import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import playersRouter from './routes/players.route';
import errorHandler from './middlewares/error.middleware';
import config from './utils/config';

dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', playersRouter);
app.use(errorHandler);

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
