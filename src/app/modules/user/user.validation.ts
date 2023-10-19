import { UserRole } from '@prisma/client';
import { z } from 'zod';

const create = z.object({
  body: z.object({
    firstName: z.string({
      required_error: 'Name is Required',
    }),
    lastName: z.string({
      required_error: 'Name is Required',
    }),
    email: z.string({
      required_error: 'Email is Required',
    }),
    password: z.string({
      required_error: 'Password is Required',
    }),
    contactNo: z.string({
      required_error: 'contactNo is Required',
    }),
    role: z
      .enum([...Object.values(UserRole)] as [string, ...string[]], {
        required_error: 'Role Is Required',
      })
      .optional(),
    address: z.string({
      required_error: 'Address Is Required',
    }),
    profileImg: z.string({
      required_error: 'Profile Img is Required',
    }),
  }),
});

const update = z.object({
  body: z
    .object({
      name: z.string().optional(),
      email: z.string().optional(),
      password: z.string().optional(),
      contactNo: z.string().optional(),
      role: z
        .enum([...Object.values(UserRole)] as [string, ...string[]], {})
        .optional(),
      address: z.string().optional(),
      profileImg: z.string().optional(),
    })
    .optional(),
});

export const UserValidation = {
  create,
  update,
};
