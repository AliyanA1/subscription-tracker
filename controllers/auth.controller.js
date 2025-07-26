import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/envConfig.js";


export const signUp=async(req,res)=>{
  try {
    const {userName, email, password}=req.body;

  const check=await userModel.findOne({email});
  if(check){
   return res.status(400).json({message:"User Already exist"})

  }
  //need to hash the password before saving into the database so we use bcrypt for this
   const salt=await bcrypt.genSalt(10);
   const hashPassword=await bcrypt.hash(password, salt)

  const data=await userModel.create({ userName, email, password: hashPassword });
   
  const payload={id:data._id, email:data.email, role: data.role}
  const token=jwt.sign(payload, JWT_SECRET,{expiresIn: "1h"});

  res.cookie("token",token)

  res.json({
    success: "account created successfuly",
    token,
    data
  })

  } catch (error) {
    res.json({success: "faild", message: error.message})
  }


  
}

export const signIn=async(req,res)=>{
  try {
    const {email,password}=req.body;

  const find=await userModel.findOne({email});
  if(!find){
    return res.status(400).json("email/password invaild");
  }

  const check=await bcrypt.compare(password,find.password);
  if(!check){
    return res.status(400).json("email/password invaild");
  }
  const payload={id: find._id, email: find.email, role: find.role};
  const token=jwt.sign(payload,JWT_SECRET, {expiresIn: "1h"});

  res.cookie("token", token);

  res.json({
    success: "signIn successfuly",
    token,
    find
  })

  } catch (error) {
    res.status(400).json({
      success: "faild",
      message: error.message
    })
  }

}