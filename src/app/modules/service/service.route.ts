import express from 'express';
import auth from '../../middlewares/auth';
import { ServiceController } from './service.controller';
import { ENUM_USER_ROLE } from '../../../enums/user';
const router = express.Router();

router.post(
  '/createService',
  auth(ENUM_USER_ROLE.SUPER_ADMIN),
  ServiceController.insertIntoDB
);

router.get('/:id', ServiceController.getSingleService);
router.get('/', ServiceController.getSingleService);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN),
  ServiceController.deleteService
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN),
  ServiceController.updateService
);

export const ServiceRoutes = router;
