const mongoose =require("mongoose");

const CatalogBasicPriceTable = new mongoose.Schema({     
    Price :
    {
        type: Number,
        required : true
    },
    SpecialPrice :
    {
        type: Number,
        required : true
    },
    SpecialPriceType :
    {
        type : String,
        required :true
    },
    SpecialPriceStart :
    {
        type : String,
        required :true
    },
    SpecialPriceEnd :
    {
        type: String,
        required : true
    },
    Product_id :
    {
        type : String,
        
    },
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("CatalogBasicPrice",CatalogBasicPriceTable);