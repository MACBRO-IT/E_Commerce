const mongoose =require("mongoose");

const CatalogBasicGeneralTable = new mongoose.Schema({     
    Attribute :
    {
        type: String,
        required : true
    },
    Values :
    {
        type: String,
        required : true
    },  
    Product_id :
    {
        type : String,
        required :true
    },   
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("CatalogBasicGeneral",CatalogBasicGeneralTable);