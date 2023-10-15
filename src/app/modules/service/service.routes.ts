import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ServiceController } from './service.controller';
import { serviceValidation } from './service.validation';

const router = express.Router();

router.get('/', ServiceController.getAllService);
router.get('/:id', ServiceController.getSingleService);
router.post(
  '/',
  validateRequest(serviceValidation.create),
  ServiceController.insertIntoDB
);

router.patch(
  '/:id',
  validateRequest(serviceValidation.update),
  ServiceController.updateService
);
router.delete('/:id', ServiceController.deleteService);

export const ServiceRouter = router;
