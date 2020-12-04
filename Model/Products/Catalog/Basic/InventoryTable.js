const mongoose =require("mongoose");

const CatalogBasicInventoryTable = new mongoose.Schema({     
    SKU :
    {
        type: String,
        required : true
    },
    InventoryManagement :
    {
        type: String,
        required : true
    },
    qty : {
        type: String
       
    },
    StockAvailability :
    {
        type : String,
        required :true
    }, 
    Product_id :
    {
        type: String 
    },
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("CatalogBasicInventory",CatalogBasicInventoryTable);