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

    if(!findAUser){
        return res.status(400).json({
        status: "faild",
        message: "their is no such a user"
    })
    }

    res.status(200).json({
        status: "success",
        User: findAUser
    })
    } catch (error) {
           return res.status(400).json({
        status: "faild",
        message: error.message
    })
    }
}