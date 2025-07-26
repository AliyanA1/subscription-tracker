import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controller.js";

const authRouter=Router();


authRouter.post("/signUp",signUp)

authRouter.post("/signIn",signIn);

authRouter.post("/signOut",(req,res)=> res.send("sign out from account"));


export default authRouter;