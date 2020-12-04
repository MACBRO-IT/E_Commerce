const mongoose =require("mongoose");

const CatalogBasicTable = new mongoose.Schema({     
    Product_id :
    {
        type : String  
    }, 
    Name :
    {
        type: String 
    },
    Description :
    {
        type: String 
    },
    Brand :
    {
        type : String 
    },
    Categories :
    {
        type : String 
    },
    TaxClass :
    {
        type: String  
    },
    Tags :
    {
        type: String 
    },
    Status :
    {
        type : String 
    }, 

    Price :
    {
        type: Number 
    },
    SpecialPrice :
    {
        type: Number 
    },
    SpecialPriceType :
    {
        type : String 
    },
    SpecialPriceStart :
    {
        type : String 
    },
    SpecialPriceEnd :
    {
        type: String 
    },

    SKU :
    {
        type: String 
    },
    InventoryManagement :
    {
        type: String 
    },
    qty : {
        type: String 
    },
    StockAvailability :
    {
        type : String,
        
    }, 

    MetaURL :
    {
        type: String 
    },
    MetaTitle :
    {
        type: String 
    },
    MetaDescription :
    {
        type: String 
    },
     
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("CatalogBasic",CatalogBasicTable);