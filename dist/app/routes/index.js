"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const booking_routes_1 = require("../modules/booking/booking.routes");
const timeSlots_routes_1 = require("../modules/TimeSlot/timeSlots.routes");
const auth_routes_1 = require("../modules/auth/auth.routes");
const service_routes_1 = require("../modules/service/service.routes");
const user_routes_1 = require("../modules/user/user.routes");
const review_route_1 = require("../modules/review/review.route");
const profile_route_1 = require("../modules/profile/profile.route");
const feedback_route_1 = require("../modules/feeback/feedback.route");
const router = express_1.default.Router();
const moduleRoutes = [
    // ... routes
    {
        path: '/auth',
        route: auth_routes_1.AuthRouter,
    },
    {
        path: '/profile',
        route: profile_route_1.profileRoutes,
    },
    {
        path: '/user',
        route: user_routes_1.UserRoutes,
    },
    {
        path: '/service',
        route: service_routes_1.ServiceRouter,
    },
    {
        path: '/time-slots',
        route: timeSlots_routes_1.timeSlotsRoutes,
    },
    {
        path: '/booking',
        route: booking_routes_1.BookingRoutes,
    },
    {
        path: '/review',
        route: review_route_1.ReviewRoutes,
    },
    {
        path: '/feedback',
        route: feedback_route_1.FeedbackRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
