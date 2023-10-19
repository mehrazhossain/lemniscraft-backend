"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authValidation = void 0;
const zod_1 = require("zod");
const logIn = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({ required_error: 'Email Is Required' }).email(),
        password: zod_1.z.string({ required_error: 'Password Is Required' }),
    }),
});
exports.authValidation = {
    logIn,
};
