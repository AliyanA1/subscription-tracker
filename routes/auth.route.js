import { Router } from "express";
import { signIn, signOut, signUp } from "../controllers/auth.controller.js";
import { userMiddleware } from "../middleware/user.middleware.js";

const authRouter=Router();


authRouter.post("/signUp",signUp)

authRouter.post("/signIn",signIn);

authRouter.get("/signOut",userMiddleware,signOut);


export default authRouter;


