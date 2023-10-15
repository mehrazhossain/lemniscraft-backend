import express from 'express';
import { BookingRoutes } from '../modules/booking/booking.routes';
import { timeSlotsRoutes } from '../modules/TimeSlot/timeSlots.routes';
import { AuthRouter } from '../modules/auth/auth.routes';
import { ServiceRouter } from '../modules/service/service.routes';
import { UserRoutes } from '../modules/user/user.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/auth',
    route: AuthRouter,
  },
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/service',
    route: ServiceRouter,
  },
  {
    path: '/time-slots',
    route: timeSlotsRoutes,
  },
  {
    path: '/booking',
    route: BookingRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
