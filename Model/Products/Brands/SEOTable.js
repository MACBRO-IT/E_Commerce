const mongoose =require("mongoose");

const BrandsSEOTable = new mongoose.Schema({     
    MetaURL :
    {
        type: String,
        required : true
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
    Brand_Id :
    {
        type: String,
        required : true
    },
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("BrandsSEO",BrandsSEOTable);