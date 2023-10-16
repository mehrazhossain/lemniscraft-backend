/* eslint-disable @typescript-eslint/no-explicit-any */
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { FeedbackForm } from '@prisma/client';

const createFeedback = async (
  feedback: FeedbackForm
): Promise<FeedbackForm | null> => {
  const result = await prisma.feedbackForm.create({
    data: feedback,
  });
  return result;
};

const getAllFeedbacks = async (
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<FeedbackForm[]>> => {
  const { page, limit } =
    paginationHelpers.calculatePagination(paginationOptions);

  let result: any = [];
  let total = 0;

  const feedbackForms = await prisma.feedbackForm.findMany({
    include: { user: true },
  });

  result = feedbackForms;
  total = feedbackForms.length;

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

export const FeedbackService = {
  createFeedback,
  getAllFeedbacks,
};
