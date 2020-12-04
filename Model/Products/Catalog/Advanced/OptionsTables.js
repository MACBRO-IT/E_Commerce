const mongoose =require("mongoose");

const CatalogAdvancedOptionsTable1 = new mongoose.Schema({     
    Name :
    {
        type: String,
        required : true
    },
    Type :
    {
        type: String,
        required : true
    },
    Required:
    {
        type: String,
        required : true
    },
    Label :
    {
        type: String,
        required : true
    },
    Price :
    {
        type: Number,
        required : true
    },
    PriceType:
    {
        type: String,
        required : true
    },
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("CatalogAdvancedOptionss",CatalogAdvancedOptionsTable1);