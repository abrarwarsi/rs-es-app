"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const players_route_1 = __importDefault(require("./routes/players.route"));
const error_middleware_1 = __importDefault(require("./middlewares/error.middleware"));
const config_1 = __importDefault(require("./utils/config"));
dotenv_1.default.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/', players_route_1.default);
app.use(error_middleware_1.default);
app.listen(config_1.default.PORT, () => {
    console.log(`Server running on port ${config_1.default.PORT}`);
});
