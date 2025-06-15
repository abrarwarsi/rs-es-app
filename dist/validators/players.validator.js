"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateGetPlayerById = exports.validateGetAllPlayers = void 0;
const express_validator_1 = require("express-validator");
exports.validateGetAllPlayers = [
    (0, express_validator_1.query)('sort')
        .optional()
        .isIn(['asc', 'desc'])
        .withMessage('Sort must be either asc or desc'),
    (0, express_validator_1.query)('filter')
        .optional()
        .isString()
        .withMessage('Filter must be a string'),
];
exports.validateGetPlayerById = [
    (0, express_validator_1.param)('id')
        .exists().withMessage('Player ID is required')
        .isInt({ gt: 0 }).withMessage('Player ID must be a positive integer'),
];
