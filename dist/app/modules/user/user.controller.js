"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const user_service_1 = require("./user.service");
const pick_1 = __importDefault(require("../../../shared/pick"));
const user_constant_1 = require("./user.constant");
const getAllUserFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, user_constant_1.userFilterableFields);
    const options = (0, pick_1.default)(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = yield user_service_1.UserService.getAllUserFromDB(filters, options);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'All User Fetched Successfully',
        data: result,
    });
}));
const getSingleUserFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield user_service_1.UserService.getSingleUserFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Single User Fetched Successfully',
        data: result,
    });
}));
const updateSingleUserFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = req.body;
    const result = yield user_service_1.UserService.updateSingleUserFromDB(id, data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Single User Updated Successfully',
        data: result,
    });
}));
const deleteSingleUserFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield user_service_1.UserService.deleteSingleUserFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Delete User Successfully',
        data: result,
    });
}));
exports.UserController = {
    getSingleUserFromDB,
    updateSingleUserFromDB,
    getAllUserFromDB,
    deleteSingleUserFromDB,
};
