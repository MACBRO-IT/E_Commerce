const mongoose =require("mongoose");

const CouponsUsageRestrictionsTable = new mongoose.Schema({     
    MinimumSpend :
    {
        type: Number,
        required : true
    },
    MaximumSpend :
    {
        type: Number,
        required : true
    },
    Products :
    {
        type : String,
        required :true
    },
    ExcludeProducts :
    {
        type : String,
        required :true
    }, 
    Categories :
    {
        type : String,
        required :true
    }, 
    ExcludeCategories :
    {
        type : String,
        required :true
    }, 
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("CouponsUsageRestrictions",CouponsUsageRestrictionsTable);