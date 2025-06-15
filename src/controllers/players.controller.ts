import axios from 'axios';
import { Request, Response, NextFunction } from 'express';
import config from '../utils/config';

const fetchPlayers = async () => {
  const { data } = await axios.get(`${config.DATA_URL}/headtohead.json`);
  return data.players;
};

export const getAllPlayers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const players = await fetchPlayers();
    players.sort((a: any, b: any) => a.id - b.id);
    res.json(players);
  } catch (err) {
    next(err);
  }
};

export const getPlayerById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = parseInt(req.params.id);
    const players = await fetchPlayers();
    const player = players.find((p: any) => p.id === id);
    if (!player) {
      res.status(404).json({ message: 'Player not found' });
      return;
    }
    res.json(player);
  } catch (err) {
    next(err);
  }
};