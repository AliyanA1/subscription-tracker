import { Router } from "express";
import { allSubscription, cancelSubscription, createSubscription, updateSubscription, userSubscriptions } from "../controllers/subscription.controller.js";
import { userMiddleware } from "../middleware/user.middleware.js";

const subscriptionRouter=Router();
subscriptionRouter.use(userMiddleware);

subscriptionRouter.get("/", allSubscription);

subscriptionRouter.get("/:id",userSubscriptions )

subscriptionRouter.post("/", createSubscription);

subscriptionRouter.put("/:id", updateSubscription);

subscriptionRouter.delete("/:id", cancelSubscription);






export default subscriptionRouter;