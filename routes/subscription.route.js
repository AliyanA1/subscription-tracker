import { Router } from "express";

const subscriptionRouter=Router();


subscriptionRouter.get("/", (req,res)=> res.send("here is all the list of subscription"))

subscriptionRouter.get("/:id", (req,res)=> res.send("get subscription details"))

subscriptionRouter.post("/", (req,res)=> res.send("you activated the subscription of this..."))

subscriptionRouter.put("/:id", (req,res)=> res.send("update the subscription"))

subscriptionRouter.delete("/:id", (req,res)=> res.send("delete the subscription "))

subscriptionRouter.get("user/:id", (req,res)=> res.send("user all subscription's details"))

subscriptionRouter.put("/:id/cancel", (req,res)=> res.send("cancel the subscription"))

subscriptionRouter.get("/upcoming-renewal", (req,res)=> res.send("upcoming  subscription"))


export default subscriptionRouter;