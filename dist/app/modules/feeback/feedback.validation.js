"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackValidaion = void 0;
const zod_1 = require("zod");
const createFeedbackFormSchema = zod_1.z.object({
    // id: z.string().uuid(), // Assuming the id is a UUID string
    // feedback: z.string(),
    // userId: z.string().uuid(), // Assuming userId is a UUID string
    body: zod_1.z.object({
        feedback: zod_1.z.string(),
        userId: zod_1.z.string().uuid(),
    }),
});
exports.FeedbackValidaion = {
    createFeedbackFormSchema,
};
