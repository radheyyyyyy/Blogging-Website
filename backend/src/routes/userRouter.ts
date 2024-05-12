import {Hono} from "hono";
import {sign,decode,verify} from 'hono/jwt';
import {PrismaClient} from '@prisma/client/edge';
import {withAccelerate} from "@prisma/extension-accelerate";
import {signinInputs, signupInputs} from '@radheyyyy/common'
export const userRoute=new Hono<{
    Bindings:{DATABASE_URL:string}
}>();

userRoute.post('signup',async (c)=>{
    const prisma=new PrismaClient({datasourceUrl:c.env?.DATABASE_URL}).$extends(withAccelerate());
    const b=await c.req.json();
    if(signupInputs.safeParse(b).success){
    const user=await prisma.user.findFirst({where:{email:b.email}})
    if(user) return c.text("Please Login")
    await prisma.user.create({
        data:{email:b.email,password:b.password,name:b.name}
    })
    return c.text("Sign up success")

} else{return c.text("Invalid inputs")}
})

userRoute.post('/login',async (c)=>{
    const prisma=new PrismaClient({datasourceUrl:c.env.DATABASE_URL}).$extends(withAccelerate());
    const b=await c.req.json();
    if(signinInputs.safeParse(b).success){
    const user= await prisma.user.findFirst({where:{email:b.email}});
    // @ts-ignore
    if(user){
        return c.json({token:await sign(user.id,"qwerty")})
    }
    else return c.text("Incorrect password or email")
}
    else {return c.text("Invalid inputs")}
}
)