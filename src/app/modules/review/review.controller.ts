import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { ReviewService } from './review.service';
import { RequestHandler } from 'express-serve-static-core';
import { Review } from '@prisma/client';

const createReview: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...reviewData } = req.body;
    console.log(req.body);

    const result = await ReviewService.createReview(reviewData);

    sendResponse<Review>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Review added successfully!',
      data: result,
    });
  }
);

const getAllReviews = catchAsync(async (req: Request, res: Response) => {
  const paginationOptions = pick(req.query, paginationFields);

  const result = await ReviewService.getAllReviews(
    paginationOptions,
    req.params.id
  );

  sendResponse<Review[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review retrieved successfully !',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleReview = catchAsync(async (req: Request, res: Response) => {
  const reviewId = req.params.id;

  const review = await ReviewService.getSingleReview(reviewId);

  if (!review) {
    res.status(404).json({ message: 'Review not found' });
  }

  sendResponse<Review>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review retrieved successfully !',
    data: review,
  });
});

export const ReviewController = {
  createReview,
  getAllReviews,
  getSingleReview,
};
