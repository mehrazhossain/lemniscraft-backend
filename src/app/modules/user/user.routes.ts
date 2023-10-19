import express from 'express';
import auth from '../../middlewares/auth';
import { UserController } from './user.controller';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  UserController.getAllUserFromDB
);
router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  UserController.getSingleUserFromDB
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  UserController.updateSingleUserFromDB
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  UserController.deleteSingleUserFromDB
);

export const UserRoutes = router;
