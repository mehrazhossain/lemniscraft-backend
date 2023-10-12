import { z } from 'zod';

const createReviewZodSchema = z.object({
  body: z.object({
    service: z.string(),
    reviewText: z.string(),
    rating: z.number(),
  }),
});

export const ReviewValidaion = {
  createReviewZodSchema,
};
