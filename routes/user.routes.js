import { Router } from "express";
import { cancelUserSubscription, deleteAUser, getAllUsers, getAUser } from "../controllers/user.controller.js";
import { adminMiddleware } from "../middleware/user.middleware.js";

const userRouter=Router();
userRouter.use(adminMiddleware);

//for getting all the users details
userRouter.get("/",getAllUsers);

//for getting the specific user details
userRouter.get("/:id",getAUser);

// for canceling the  user specific subscription
userRouter.put("/:id",cancelUserSubscription)

//for deleting the user all its details and its subscrition details only access for admin
userRouter.delete("/:id",deleteAUser)



export default userRouter;