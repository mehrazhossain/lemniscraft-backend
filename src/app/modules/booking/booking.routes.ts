import express from 'express';
import { bookingController } from './booking.controller';

const router = express.Router();

router.get('/', bookingController.getAllbooking);
router.get('/:id', bookingController.getAllbooking);
router.post('/', bookingController.booking);
router.patch('/:id', bookingController.updateSingleBooking);
router.delete('/:id', bookingController.deleteSingleBooking);

export const BookingRoutes = router;
