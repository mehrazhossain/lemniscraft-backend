import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { ProfileController } from './profile.controller';
import auth from '../../middlewares/auth';
const router = express.Router();

router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER, ENUM_USER_ROLE.SUPER_ADMIN),
  ProfileController.getUserProfile
);

export const profileRoutes = router;
