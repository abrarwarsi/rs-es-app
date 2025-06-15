"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const players_controller_1 = require("../controllers/players.controller");
const players_validator_1 = require("../validators/players.validator");
const validate_middleware_1 = require("../middlewares/validate.middleware");
const router = express_1.default.Router();
router.get('/players', players_validator_1.validateGetAllPlayers, validate_middleware_1.handleValidation, players_controller_1.getAllPlayers);
router.get('/players/:id', players_validator_1.validateGetPlayerById, validate_middleware_1.handleValidation, players_controller_1.getPlayerById);
exports.default = router;
