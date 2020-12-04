const mongoose =require("mongoose");

const CatalogAdvancedAdditionalTable = new mongoose.Schema({    
    Additional_Id :
    {
        type: String,
        required : true
    }, 
    ShortDescription :
    {
        type: String,
        required : true
    },
    ProductNewFrom :
    {
        type: String,
        required : true
    },
    ProductNewTo :
    {
        type : String,
        required :true
    },
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("CatalogAdvancedAdditional",CatalogAdvancedAdditionalTable);