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
exports.bookingService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const booking = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.booking.create({
        data,
    });
    return result;
});
const getAllbooking = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.booking.findMany({
        include: {
            service: true,
            slot: true,
            user: true,
        },
    });
    return result;
});
const getSinglebooking = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.booking.findUnique({
        where: {
            id: id,
        },
        include: {
            service: true,
            slot: true,
            user: true,
        },
    });
    return result;
});
const updateSingleBooking = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.booking.update({
        where: {
            id: id,
        },
        data,
        include: {
            service: true,
            slot: true,
            user: true,
        },
    });
    return result;
});
const deleteSingleBooking = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.booking.delete({
        where: {
            id: id,
        },
        include: {
            service: true,
            slot: true,
            user: true,
        },
    });
    return result;
});
exports.bookingService = {
    booking,
    getAllbooking,
    getSinglebooking,
    updateSingleBooking,
    deleteSingleBooking,
};
