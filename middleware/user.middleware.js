import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config/envConfig.js";

export const userMiddleware = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      status: "failed",
      message: "No token provided, not authenticated"
    });
  }

  try {
    const userData = jwt.verify(token, JWT_SECRET);
    if(req.params.id){
      if(userData.id !== req.params.id){
        return res.status(401).json({
      status: "failed",
      message: "not authenticated"
    });
    }
    }
    
    req.user = userData; 
    next();
  } catch (err) {
    return res.status(401).json({
      status: "failed",
      message: "Invalid or expired token"
    });
  }
};

export const adminMiddleware=(req,res,next)=>{
  try {

    const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      status: "failed",
      message: "No token provided, not authenticated"
    });
  }

    const userData = jwt.verify(token, JWT_SECRET);


     if(!userData){
        return res.status(401).json({
      status: "failed",
      message: "not authenticated"
    });
    }
    req.user = userData; 

    if(userData.role == "admin"){
     return next();
    }
    res.status(400).json({
      status:"faild",
      message: "only  admin can access this "
    })
  } catch (error) {
     res.status(400).json({
      status:"faild",
      message: "only admin access this not authenticated"
    })
  }
}

