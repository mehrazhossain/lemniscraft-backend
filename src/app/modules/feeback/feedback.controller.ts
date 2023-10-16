import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { RequestHandler } from 'express-serve-static-core';
import { FeedbackForm } from '@prisma/client';
import { FeedbackService } from './feedback.service';

const createFeedback: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...feedbackData } = req.body;

    const result = await FeedbackService.createFeedback(feedbackData);

    sendResponse<FeedbackForm>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Feedback created successfully!',
      data: result,
    });
  }
);

const getAllFeedbacks = catchAsync(async (req: Request, res: Response) => {
  const paginationOptions = pick(req.query, paginationFields);

  const result = await FeedbackService.getAllFeedbacks(paginationOptions);

  sendResponse<FeedbackForm[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Feedbacks retrieved successfully !',
    meta: result.meta,
    data: result.data,
  });
});

export const FeedbackController = {
  createFeedback,
  getAllFeedbacks,
};
