import {Hono} from "hono";
import {sign,decode,verify} from 'hono/jwt';
import {PrismaClient} from '@prisma/client/edge';
import {withAccelerate} from "@prisma/extension-accelerate";
import {blogInputs, updateBlog} from "@radheyyyy/common";

export const blogroute=new Hono<{
    Bindings:{DATABASE_URL:string}
}>();
let v:string;

blogroute.use('/*',async (c,next)=>{
    const token=c.req.header("Authorization");
    if(token){
    try{
    v=await verify(token,"qwerty")
    }
    catch (e){ return c.text("Authorization revoked due to invalid token")
    }
    await next();}
    else{return c.text("Authorization needed")}

})


blogroute.post('/',async (c)=>{
    const prisma=new PrismaClient({datasourceUrl:c.env.DATABASE_URL}).$extends(withAccelerate());
    const b=await c.req.json();
    if(blogInputs.safeParse(b).success){
    try{
        await prisma.post.create({data:{
        title:b.title,
            content:b.content,
            authorId:v
        }})
        return c.text("Blog created successfully")
    }catch (e){
        return c.text("Failed to create blog")
    }}
    else {
        return c.text("Invalid inputs.")
    }
})


blogroute.put('/',async (c)=>{
    const prisma=new PrismaClient({datasourceUrl:c.env.DATABASE_URL}).$extends(withAccelerate());
    const b=await c.req.json();
    if(updateBlog.safeParse(b).success){
    try{
        await prisma.post.update({where:{id:b.id},data:{
            title:b.title, content:b.content,
                authorId:v
            }})
        return c.text("Blog updated Successfully")
    }catch (e){
        return c.text("Blog update failed...Please try again")
    }}
    else {return c.text("Invalid inputs")}
})

blogroute.get('/bulk',async (c)=>{
    const prisma=new PrismaClient({datasourceUrl:c.env.DATABASE_URL}).$extends(withAccelerate());
    try{
        const blogs=await prisma.post.findMany({select:{title:true,content:true,id:true,author:{select:{name:true}}}});
        return c.json({blogs:blogs});
    }catch (e){
        return c.text("Failed to fetch blogs");
    }
})

blogroute.get('/:id',async (c)=>{
    const prisma=new PrismaClient({datasourceUrl:c.env.DATABASE_URL}).$extends(withAccelerate());
    const i=c.req.param();
    try{
        const blog=await prisma.post.findUnique({where:{id:i.id},select:{content:true,title:true,author:{select:{name:true}}}});
        return c.json({blog:blog})
    }catch (e){
    return c.text("No blog found")}
})

