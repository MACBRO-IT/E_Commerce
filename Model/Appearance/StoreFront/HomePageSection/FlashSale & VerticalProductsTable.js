const mongoose =require("mongoose");

const FlashSaleVerticalProductsTable = new mongoose.Schema({     
    SectionStatus :
    {
        type: String,
        required : true
    },
    FlashTitle :
    {
        type: String,
        required : true
    },
    ActiveCampaign :
    {
        type : String,
        required :true
    },
    Title :
    {
        type : String,
        required :true
    },
    Type :
    {
        type : String,
        required :true
    },
    Category :
    {
        type : String,
        required :true
    },
  
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("FlashSaleVerticalProducts",FlashSaleVerticalProductsTable);