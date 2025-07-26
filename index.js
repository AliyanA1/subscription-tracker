import express from "express";
import cookieParser from "cookie-parser";

//local imports
import { PORT } from "./config/envConfig.js";
import { mongooseConection } from "./database/mongodb.js";
import authRouter from "./routes/auth.route.js";
import subscriptionRouter from "./routes/subscription.route.js";
import userRouter from "./routes/user.routes.js";
import errorMiddleware from "./middleware/error.middleware.js";


const app= express();

//middlewars
app.use(express.json());
app.use(cookieParser())
app.use(errorMiddleware);

app.get("/",(req,res)=>{
    res.send("hey working on subscription tracker backend api");
});
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/subscription", subscriptionRouter);
app.use("/api/v1/users", userRouter);

app.listen(PORT, async()=>{
    console.log(`server is listen on the Port:http://localhost:${3000}`)

    await mongooseConection();
})