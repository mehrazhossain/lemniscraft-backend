import { z } from 'zod';
const create = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is Required',
    }),
    image: z.string({
      required_error: 'Image is Required',
    }),
    description: z.string({
      required_error: 'Description is Required',
    }),
    price: z.number({
      required_error: 'Price is Required',
    }),
    availability: z
      .enum(['upcoming', 'available'], {
        required_error: 'Availability is required',
      })
      .optional(),
  }),
});
const update = z.object({
  body: z.object({
    title: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    price: z.number().optional(),
    availability: z.enum(['upcoming', 'available']).optional(),
  }),
});

export const serviceValidation = {
  create,
  update,
};
