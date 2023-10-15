import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import prisma from '../../../shared/prisma';
import { ILoginUser } from './auth.interface';

const SignUP = async (data: User) => {
  const { password } = data;
  const bcryptPassword = await bcrypt.hash(
    password,
    Number(config.bycrypt_salt_rounds)
  );
  data.password = bcryptPassword;
  const result = await prisma.user.create({
    data,
  });
  return result;
};

const loginUser = async (payload: ILoginUser): Promise<string> => {
  const { email, password } = payload;
  const isUserExist = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User Not Found');
  }
  const checkPassword = await bcrypt.compare(password, isUserExist.password);
  if (!checkPassword) {
    throw new ApiError(
      httpStatus.NOT_FOUND,
      'Email address or password not valid'
    );
  }
  // create assess token
  const { id: userId, role } = isUserExist;
  const accessToken = jwtHelpers.createToken(
    { userId, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  return accessToken;
};

export const AuthService = {
  SignUP,
  loginUser,
};
