import { z } from 'zod';

const createServiceZodSchema = z.object({
  body: z.object({
    title: z.string(),
    price: z.number(),
    category: z.string(),
    location: z.string(),
  }),
});

const updateServiceZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    price: z.number().optional(),
    category: z.string().optional(),
    location: z.string().optional(),
  }),
});

export const ServiceValidaion = {
  createServiceZodSchema,
  updateServiceZodSchema,
};
