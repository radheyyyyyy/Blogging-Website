import { Hono } from 'hono'
import {userRoute} from "./routes/userRouter";
import {blogroute} from "./routes/blogRouter";
import {cors} from "hono/cors";

const app = new Hono()
app.use(cors())
app.route("/medium/ver1/user",userRoute)
app.route("/medium/ver1/blog",blogroute)

export default app
