import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enmus/user';
import { ServiceValidaion } from './service.validation';
import { ServiceController } from './service.controller';
const router = express.Router();

router.post(
  '/createService',
  auth(ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(ServiceValidaion.createServiceZodSchema),
  ServiceController.createService
);

router.get(
  '/:id',
  // auth(ENUM_USER_ROLE.USER),
  ServiceController.getSingleService
);
router.get(
  '/',
  // auth(ENUM_USER_ROLE.USER),
  ServiceController.getAllServices
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN),
  ServiceController.deleteService
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(ServiceValidaion.updateServiceZodSchema),
  ServiceController.updateService
);

export const ServiceRoutes = router;
