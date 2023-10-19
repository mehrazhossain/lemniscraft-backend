"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRouter = void 0;
const express_1 = __importDefault(require("express"));
const service_controller_1 = require("./service.controller");
const router = express_1.default.Router();
router.get('/', service_controller_1.ServiceController.getAllService);
router.get('/:id', service_controller_1.ServiceController.getSingleService);
router.post('/', service_controller_1.ServiceController.insertIntoDB);
router.patch('/:id', service_controller_1.ServiceController.updateService);
router.delete('/:id', service_controller_1.ServiceController.deleteService);
exports.ServiceRouter = router;
