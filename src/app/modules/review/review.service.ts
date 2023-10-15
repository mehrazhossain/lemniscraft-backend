/* eslint-disable @typescript-eslint/no-explicit-any */
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { Review } from '@prisma/client';

// const createReview = async (review: Review): Promise<Review | null> => {
//   const newReview = ReviewController.createReview(review);

//   return newReview;
// };

const createReview = async (review: Review): Promise<Review | null> => {
  const result = await prisma.review.create({
    data: review,
  });
  return result;
};

const getAllReviews = async (
  paginationOptions: IPaginationOptions,
  serviceId: string
): Promise<IGenericResponse<Review[]>> => {
  const { page, limit } =
    paginationHelpers.calculatePagination(paginationOptions);

  let result: any = [];
  let total = 0;

  let reviews: any = [];

  const serviceReviews = await prisma.review.findMany({
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
};

const getSingleReview = async (id: string): Promise<Review | null> => {
  const review = await prisma.review.findUnique({
    where: { id: id },
    include: {
      reviewBy: true,
    },
  });

  return review;
};

export const ReviewService = {
  createReview,
  getAllReviews,
  getSingleReview,
};
