import express from 'express';
import { ServiceController } from './service.controller';

const router = express.Router();

router.get('/', ServiceController.getAllService);
router.get('/:id', ServiceController.getSingleService);
router.post('/', ServiceController.insertIntoDB);

router.patch('/:id', ServiceController.updateService);
router.delete('/:id', ServiceController.deleteService);

export const ServiceRouter = router;
