const mongoose =require("mongoose");

const CouponsUsageLimitsTable = new mongoose.Schema({     
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