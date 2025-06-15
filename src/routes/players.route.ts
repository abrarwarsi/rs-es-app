import express from 'express';
import { getAllPlayers, getPlayerById } from '../controllers/players.controller';
import { validateGetAllPlayers, validateGetPlayerById } from '../validators/players.validator';
import { handleValidation } from '../middlewares/validate.middleware';

const router = express.Router();

router.get('/players', validateGetAllPlayers, handleValidation, getAllPlayers);
router.get('/players/:id', validateGetPlayerById, handleValidation, getPlayerById);

export default router;