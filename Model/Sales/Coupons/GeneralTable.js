const mongoose =require("mongoose");

const CouponsGeneralTable = new mongoose.Schema({ 
    Coupon_Id :
    {
        type: String,
        
    },    
    Name :
    {
        type: String,
        required : true
    },
    Code :
    {
        type: String,
        required : true
    },
    DiscountType :
    {
        type : String,
        required :true
    },
    Value :
    {
        type : String,
        required :true
    }, 
    FreeShipping :
    {
        type : String 
        
    }, 
    Startdate :
    {
        type : Date,
        required :true
    }, 
    Enddate :
    {
        type : Date,
        required :true
    }, 
    Status :
    {
        type : String 
       
    }, 
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("CouponsGeneral",CouponsGeneralTable);