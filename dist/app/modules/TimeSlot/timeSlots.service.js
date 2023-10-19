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
exports.timeSlotsServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createTimeSlot = (timeSlot) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.timeSlots.create({
        data: timeSlot,
    });
    return result;
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAllTimeSlots = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.timeSlots.findMany();
    const total = yield prisma_1.default.timeSlots.count();
    return {
        meta: {
            total,
        },
        data: result,
    };
});
const getSingleTimeSlot = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.timeSlots.findUnique({
        where: {
            id: id,
        },
    });
    return result;
});
const updateTimeSlot = (id, timeSlot) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.timeSlots.update({
        where: {
            id: id,
        },
        data: timeSlot,
    });
    return result;
});
const deleteTimeSlot = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.timeSlots.delete({
        where: {
            id: id,
        },
    });
    return result;
});
exports.timeSlotsServices = {
    createTimeSlot,
    getAllTimeSlots,
    getSingleTimeSlot,
    updateTimeSlot,
    deleteTimeSlot,
};
