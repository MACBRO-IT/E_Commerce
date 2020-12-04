const mongoose =require("mongoose");

const CatalogBasicGeneralTable = new mongoose.Schema({     
    Name :
    {
        type: String,
        required : true
    },
    Description :
    {
        type: String,
        required : true
    },
    Brand :
    {
        type : String,
        required :true
    },
    Categories :
    {
        type : String,
        required :true
    },
    TaxClass :
    {
        type: String,
        required : true
    },
    Tags :
    {
        type: String,
        required : true
    },
    Status :
    {
        type : String,
        required :true
    }, 
    Product_id :
    {
        type : String  
    },    
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("CatalogBasicGenerals",CatalogBasicGeneralTable);