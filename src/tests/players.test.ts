import request from 'supertest';
import express from 'express';
import cors from 'cors';
import playersRouter from '../routes/players.route';
import errorHandler from '../middlewares/error.middleware';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', playersRouter);
app.use(errorHandler);

describe('GET /players', () => {
  it('should return 200 and a list of players', async () => {
    const res = await request(app).get('/players');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe('GET /players/:id', () => {
  it('should return 200 and a single player for valid ID', async () => {
    const res = await request(app).get('/players/52');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id');
  });

  it('should return 400 for invalid ID', async () => {
    const res = await request(app).get('/players/invalid');
    expect(res.statusCode).toBe(400);
  });

  it('should return 404 if player not found', async () => {
    const res = await request(app).get('/players/999999');
    expect(res.statusCode).toBe(404);
  });
});