import subscriptionModel from "../models/subscription.model.js";
import userModel from "../models/user.model.js"


export const getAllUsers=async(req, res)=>{
    try {
        const allUsers=await userModel.find();
        if(!allUsers){
            return res.status(400).json({
                message: "their is no user"
            })
        }

        res.status(200).json({
            status: "success",
            "All users Data": allUsers
        })
    } catch (error) {
        res.status(400).json({
            status: "faild",
            message: error.message
        })
    }
}

export const getAUser=async(req,res)=>{
    try {
        const findAUser=await userModel.findById(req.params.id);
        const userSubscriptions=await subscriptionModel.find({user:req.params.id})

    if(!findAUser){
        return res.status(400).json({
        status: "faild",
        message: "their is no such a user"
    })
    }

    res.status(200).json({
        status: "success",
        User: findAUser,
        "message": `Here is the details of user subscription & user subscribed ${userSubscriptions.length} subscriptions`,
        "User Subscription": userSubscriptions
    })
    } catch (error) {
           return res.status(400).json({
        status: "faild",
        message: error.message
    })
    }
}

//for deleting the sepific user
export const deleteAUser=async(req,res)=>{
 try {
    const findUser=await userModel.findByIdAndDelete(req.params.id);

     if(!findUser){
        return res.status(400).json({
        status: "faild",
        message: "their is no such a user"
    })
    }

    const userSubscription=await subscriptionModel.deleteMany({user: req.params.id});

     if(!userSubscription){
        return res.status(400).json({
        status: "faild",
        message: "Error in deleting the subscription"
    })
    }

     res.status(200).json({
        status: "success",
        "deleted user": findUser,
        "message": `All the user subscription were deleted`,
        "User Subscription": userSubscription
    })



    
 } catch (error) {
     return res.status(400).json({
        status: "faild",
        message: error.message
    })
 }
}


//cancel a specific user subscription
export const cancelUserSubscription=async(req,res)=>{
    try {
        const subscription=await subscriptionModel.deleteOne({_id:req.params.id});
   
        
     if(subscription.deletedCount === 0){
        return res.status(400).json({
        status: "faild",
        message: "Error in canceling the subscription"
    })
    }

     res.status(200).json({
        status: "success",
        subscription
    })


    } catch (error) {
        return res.status(400).json({
        status: "faild",
        message: error.message
    })
    }
}