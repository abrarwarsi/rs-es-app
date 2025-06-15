import { param, query } from 'express-validator';

export const validateGetAllPlayers = [
  query('sort')
    .optional()
    .isIn(['asc', 'desc'])
    .withMessage('Sort must be either asc or desc'),
  query('filter')
    .optional()
    .isString()
    .withMessage('Filter must be a string'),
];

export const validateGetPlayerById = [
  param('id')
    .exists().withMessage('Player ID is required')
    .isInt({ gt: 0 }).withMessage('Player ID must be a positive integer'),
];
