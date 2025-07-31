import dayjs from "dayjs";
import {createRequire} from "module";
const require=createRequire(import.meta.url);
const {serve}=require("@upstash/workflow/express");
import subscriptionModel from "../models/subscription.model.js";
import { sendReminderEmail } from "../utils/send-email.js";

const REMINDERS=[7,5,2,1];

export const sendReminder=serve(async (context)=>{
    const {subscriptionId}=context.requestPayload;
    const subscription=await fetchSubscription(context,subscriptionId);
    

    if(! subscription || subscription.status !== "Active") return;

    const renewalDate=dayjs(subscription.renewalDate);

    if(renewalDate.isBefore(dayjs())){
        console.log(`Renewal date has passed for subscription ${subscriptionId}. Stopping workflow.`);
      return;
    }

    for(const dayBefore of REMINDERS){
        const reminderDate=renewalDate.subtract(dayBefore, "day");

        if(reminderDate.isAfter(dayjs())){
            await sleepUntilReminder(context, `reminder ${dayBefore} day before`, reminderDate)
        }

        if(dayjs().isSame(reminderDate, "day")){
            await triggerReminder(context, `${dayBefore} days before reminder`, subscription);
        }
    }

});


const fetchSubscription=async(context, subscriptionId)=>{
    return await context.run("get subscription", async()=>{
        return await subscriptionModel.findById(subscriptionId).populate("user","userName email")
    })
}


const sleepUntilReminder=async(context, label, date)=>{
     console.log(`Sleeping until ${label} reminder at ${date}`);
     await context.sleepUntil(label, date.toDate());
}


const triggerReminder=async(context,label, subscription)=>{
    await context.run(label, async()=>{
      

       await sendReminderEmail({
        to: subscription.user.email,
        type: label,
        subscription
       })
    })
}