import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  UserController.getSingleUserFromDB
);

router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  UserController.getAllUserFromDB
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  UserController.deleteSingleUserFromDB
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  UserController.updateSingleUserFromDB
);

export const UserRoutes = router;
