import { emailTemplates } from "./email-template.js"
import dayjs from "dayjs";
import { transporter,accountEmail } from "../config/nodemailer.js";

export const sendReminderEmail=async({to, type, subscription})=>{
   
   if(!to || !type || !subscription) throw new Error("missing required parameters");

   const template=emailTemplates.find((t)=> t.label === type);

   if(!template) throw new Error("invaild email type");

  const mailInfo = {
    userName: subscription.user.userName,
    subscriptionName: subscription.name,
    renewalDate: dayjs(subscription.renewalDate).format('MMM D, YYYY'),
    planName: subscription.name,
    price: `${subscription.currancy} ${subscription.price} (${subscription.frequency})`,
    paymentMethod: subscription.paymentMethod,
  }

  const message=template.generateBody(mailInfo);
  const subject=template.generateSubject(mailInfo);

  const mailOption={
    from: accountEmail,
    to,
    subject,
    html:message
  };

  transporter.sendMail(mailOption, (error,info)=>{
     if(error) return console.log(error, 'Error sending email');

    console.log('Email sent: ' + info.response);
  })

}