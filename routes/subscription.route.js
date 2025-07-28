import { Router } from "express";
import { allSubscription, createSubscription } from "../controllers/subscription.controller.js";
import { userMiddleware } from "../middleware/user.middleware.js";

const subscriptionRouter=Router();
subscriptionRouter.use(userMiddleware);

subscriptionRouter.get("/", allSubscription);

subscriptionRouter.get("/:id", (req,res)=> res.send("get subscription details"))

subscriptionRouter.post("/", createSubscription);

subscriptionRouter.put("/:id", (req,res)=> res.send("update the subscription"))

subscriptionRouter.delete("/:id", (req,res)=> res.send("delete the subscription "))

subscriptionRouter.get("user/:id", (req,res)=> res.send("user all subscription's details"))

subscriptionRouter.put("/:id/cancel", (req,res)=> res.send("cancel the subscription"))

subscriptionRouter.get("/upcoming-renewal", (req,res)=> res.send("upcoming  subscription"))


export default subscriptionRouter;