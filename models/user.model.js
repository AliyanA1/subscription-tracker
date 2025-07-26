import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
    userName:{
        type: String,
        required: true,
        trim: true,
    },
  email: {
  type: String,
  required: true,
  unique: true,
  match: [
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    "Please fill a valid email address",
  ],
},

    password:{
        type: String,
        required: true,
        trim: true
    },
    role:{
      type: String,
      enum: ["admin","user"],
      default: "user"
    }
}, {timestamps: true});

const userModel=mongoose.model("Users", userSchema);

export default userModel;

