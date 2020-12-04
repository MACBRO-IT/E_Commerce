const mongoose =require("mongoose");

const FlashSalesProductTable = new mongoose.Schema({
    FlashSale_Id :
    {
        type: String,
        required : true
    },     
    Product :
    {
        type: String,
        required : true
    },
    EndDate :
    {
        type: Date,
        required : true
    },
    Price :
    {
        type : String,
        required :true
    },
    Quantity :
    {
        type : String,
        required :true
    }, 
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("FlashSalesProduct",FlashSalesProductTable);