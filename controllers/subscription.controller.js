import subscriptionModel from "../models/subscription.model.js"
import fs from "fs";
import path from "path";


//active the subscription
export const createSubscription=async(req,res)=>{
    try {
        const subs=await subscriptionModel.create({
        ...req.body,
        user: req.user.id
    });
    res.status(201).json({
        status: "success",
        data: subs
    })
    } catch (error) {
        res.json({
            status: "faild",
            message: error.message
        })
    }

}

// all the avilable subscription
export const allSubscription=(req,res)=>{
   try {
     const filePath=path.resolve("availableSubscriptions.json");
    const data=fs.readFileSync(filePath,"utf-8");
    const subscriptions=JSON.parse(data);

    res.status(200).json({
        message: "here is the details of all available subscription",
        subscriptions
    })
   } catch (error) {
     res.json({
        status: "error in fetching the available subscription",
        message:error.message
     })
   }
}