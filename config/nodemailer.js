import nodemailer from "nodemailer"
import { ACCOUNT_EMAIL, EMAIL_PASSWORD } from "./envConfig.js"



export const transporter=nodemailer.createTransport({
    service: "gmail",
    auth:{
        user:ACCOUNT_EMAIL,
        pass: EMAIL_PASSWORD
    }
});