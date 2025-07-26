import { Router } from "express";
import { getAllUsers, getAUser } from "../controllers/user.controller.js";
import { adminMiddleware, userMiddleware } from "../middleware/user.middleware.js";

const userRouter=Router();

userRouter.get("/",adminMiddleware,getAllUsers);

userRouter.get("/:id",userMiddleware,getAUser);

userRouter.post("/",(req,res)=> res.send("create new user"));

userRouter.put("/",(req,res)=> res.send("update the user"));

userRouter.delete("/",(req,res)=> res.send("delete  the user"))



export default userRouter;