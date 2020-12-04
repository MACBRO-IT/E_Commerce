const mongoose =require("mongoose");

const CouponsUsageLimitsTable = new mongoose.Schema({     
    UsageLimit_Id :
    {
        type: String,
        required : true
    },
    UsageLimitPerCoupon :
    {
        type: String,
        required : true
    },
    UsageLimitPerCustomer :
    {
        type: String,
        required : true
    },
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("CouponsUsageLimits",CouponsUsageLimitsTable);