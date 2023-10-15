import { z } from 'zod';
const logIn = z.object({
  body: z.object({
    email: z.string({ required_error: 'Email Is Required' }).email(),
    password: z.string({ required_error: 'Password Is Required' }),
  }),
});

export const authValidation = {
  logIn,
};
