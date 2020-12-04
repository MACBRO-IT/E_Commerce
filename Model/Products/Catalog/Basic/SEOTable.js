const mongoose =require("mongoose");

const CatalogBasicSEOTable = new mongoose.Schema({     
    MetaURL :
    {
        type: String
        
    },
    MetaTitle :
    {
        type: String,
        required : true
    },
    MetaDescription :
    {
        type: String,
        required : true
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
module.exports = mongoose.model ("CatalogBasicSEO",CatalogBasicSEOTable);