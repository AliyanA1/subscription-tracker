import { Router } from "express";

const workFlow=Router();

workFlow.get("/subscription/reminder", (req,res)=> res.send("here is all the work flow"))

export default workFlow;