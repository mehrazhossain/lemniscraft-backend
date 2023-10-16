import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enmus/user';
import { FeedbackValidaion } from './feedback.validation';
import { FeedbackController } from './feedback.controller';
const router = express.Router();

router.post(
  '/create-feedback',
  auth(ENUM_USER_ROLE.USER),
  validateRequest(FeedbackValidaion.createFeedbackFormSchema),
  FeedbackController.createFeedback
);

router.get('/', FeedbackController.getAllFeedbacks);

export const FeedbackRoutes = router;
