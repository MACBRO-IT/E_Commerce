const mongoose =require("mongoose");

const ProductTable = new mongoose.Schema({     
    FlashSale_Id :
    {
        type: String,
       
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

const FlashSalesProductTable = new mongoose.Schema({     
    Product : [ProductTable],
    FlashSale_Id :
    {
        type : String,
        
    }, 
    
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("FlashSalesProduct",FlashSalesProductTable);