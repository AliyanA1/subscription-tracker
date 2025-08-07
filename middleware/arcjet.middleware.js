import aj from "../config/arcjet.js";

const arcjetMiddleware=async(req,res,next)=>{
      const userAgent = req.headers['user-agent'];

    // Bypass Arcjet for Postman or local development
    if (userAgent && userAgent.includes('Postman')) {
      return next();
    }
    try {
        const desicion=await aj.protect(req, {requested:1});

      if(desicion.isDenied()){
        if(desicion.reason.isRateLimit()) return res.status(429).json({message: "to many requests"})
    
        if(desicion.reason.isBot()) return res.status(403).json({message: "bot detected"})

        return res.status(403).json({message: "Acess denied"})
    }
    next();
    } catch (error) {
        console.log("error in arcjetMiddleware")
         res.status(403).json({message: error.message})
    }
}

export default arcjetMiddleware;

