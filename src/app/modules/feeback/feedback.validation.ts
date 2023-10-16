import { z } from 'zod';

const createFeedbackFormSchema = z.object({
  // id: z.string().uuid(), // Assuming the id is a UUID string
  // feedback: z.string(),
  // userId: z.string().uuid(), // Assuming userId is a UUID string

  body: z.object({
    feedback: z.string(),
    userId: z.string().uuid(),
  }),
});

export const FeedbackValidaion = {
  createFeedbackFormSchema,
};
