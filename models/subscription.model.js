import mongoose from "mongoose";

const subscriptionSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    price:{
        type: Number,
    },
    currancy:{
        type: String,
        enum: ['pkr', 'usd'],
        default: 'usd'
    },
    frequency:{
        type: String,
        enum:["daily","weekly","monthly","yearly" ],
        required: true
    },
    category:{
        type: String,
        enum:["sports","games","entertainment","politics"],
    },
    paymentMethod:{
        type: String,
        required: true
    },
    status:{
        type: String,
        enum: ["Active", "renewal", "canceled"],
        default: "Active"
    },
    startDate:{
        type: Date,
        

    },
    renewalDate:{
        type:Date
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    }


},{timestamps: true});

function calculateRenewalDate(startDate, frequency){
    const date=new Date(startDate);

    switch(frequency){
        case "daily":
            date.setDate(date.getDate() +1);
            break;
        
        case "weekly":
            date.setDate(date.getDate() +7 )
            break;
        
        case "monthly":
            date.setMonth(date.getMonth() +1)
            break;
        
        case "yearly":
            date.setFullYear(date.getFullYear()+1)
            break;

       
    }
     return date;
}

subscriptionSchema.pre("save", function(next){
    if(this.isNew){
        if(!this.startDate){
            this.startDate=new Date()
        }
        if(!this.renewalDate){
            this.renewalDate=calculateRenewalDate(this.startDate, this.frequency)
        }
    }
    next()
})

const subscriptionModel=mongoose.model("subscription", subscriptionSchema);

export default subscriptionModel;