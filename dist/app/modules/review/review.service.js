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
exports.ReviewService = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const prisma_1 = __importDefault(require("../../../shared/prisma"));
// const createReview = async (review: Review): Promise<Review | null> => {
//   const newReview = ReviewController.createReview(review);
//   return newReview;
// };
const createReview = (review) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.review.create({
        data: review,
    });
    return result;
});
const getAllReviews = (paginationOptions, serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit } = paginationHelper_1.paginationHelpers.calculatePagination(paginationOptions);
    let result = [];
    let total = 0;
    let reviews = [];
    const serviceReviews = yield prisma_1.default.review.findMany({
        where: {
            serviceId: serviceId,
        },
        include: {
            reviewBy: true,
        },
    });
    reviews = reviews.concat(serviceReviews);
    result = reviews;
    total = reviews.length;
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
const getSingleReview = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const review = yield prisma_1.default.review.findUnique({
        where: { id: id },
        include: {
            reviewBy: true,
        },
    });
    return review;
});
exports.ReviewService = {
    createReview,
    getAllReviews,
    getSingleReview,
};
