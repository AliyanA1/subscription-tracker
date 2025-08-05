import subscriptionModel from "../models/subscription.model.js"
import fs from "fs";
import path from "path";
import { workFlowClient } from "../config/upstash.js";
import { SERVER_URL } from "../config/envConfig.js";

//active the subscription
export const createSubscription=async(req,res)=>{
    try {
        const subscription=await subscriptionModel.create({
        ...req.body,
        user: req.user.id
    });

    const { workflowRunId } = await workFlowClient.trigger({
      url: `${SERVER_URL}/api/v1/workflows/subscription/reminder`,
      body: {
        subscriptionId: subscription.id,
      },
      headers: {
        'content-type': 'application/json',
      },
      retries: 0,
    })


    res.status(201).json({
        status: "success",
        data: {subscription, workflowRunId}
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


// user subscription details
export const userSubscriptions=async(req,res)=>{
  try {
   const {id}=req.params;

   const usersSubDetails=await subscriptionModel
   .find({user: id})
   .populate('user', 'userName email')

  

   res.status(200).json({
    status: "success",
     message: `Here is the details of user subscription & user subscribed ${usersSubDetails.length} subscriptions`,
    data: usersSubDetails
   })

  } catch (error) {
    res.status(400).json({
      status: "faild",
      message: error.message
    })
  }

}