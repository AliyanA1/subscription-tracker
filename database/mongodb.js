import mongoose from "mongoose";
import {DB_URI, NODE_ENV}  from '../config/envConfig.js'

export const mongooseConection=async()=>{
  try {
     await mongoose.connect(DB_URI)
   console.log(`database connect successfuly in ${NODE_ENV} enviroment`)
  } catch (error) {
    console.log('their is some error in connecting to the dataBase')
  }
}
