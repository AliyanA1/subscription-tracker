import { Router } from "express";
import { sendReminder } from "../controllers/workFlow.controller.js";

const workFlow=Router();

workFlow.post("/subscription/reminder",sendReminder)

export default workFlow;