import {z} from "zod";

export const signupInputs=z.object({
    email:z.string().email(),
    password:z.string().min(4),
    name:z.string().optional()
})

export type SignupInputs=z.infer<typeof signupInputs>

export const signinInputs=z.object({
    email:z.string().email(),
    password:z.string().min(4)})

export type SigninInputs=z.infer<typeof signinInputs>;

export const blogInputs= z.object({
    title:z.string().min(1),
    content:z.string().min(1)
})

export type BlogInputs=z.infer<typeof blogInputs>

export const updateBlog=z.object({
    title:z.string().min(1),
    content:z.string().min(1),
    id:z.string()
})

export type UpdateBlog=z.infer<typeof updateBlog>