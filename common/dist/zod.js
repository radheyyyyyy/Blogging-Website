"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlog = exports.blogInputs = exports.signinInputs = exports.signupInputs = void 0;
const zod_1 = require("zod");
exports.signupInputs = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(4),
    name: zod_1.z.string().optional()
});
exports.signinInputs = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(4)
});
exports.blogInputs = zod_1.z.object({
    title: zod_1.z.string().min(1),
    content: zod_1.z.string().min(1)
});
exports.updateBlog = zod_1.z.object({
    title: zod_1.z.string().min(1),
    content: zod_1.z.string().min(1),
    id: zod_1.z.string()
});
