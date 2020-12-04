const mongoose =require("mongoose");

const Attributes= new mongoose.Schema({
    Attributes :
    {
        type: String,  
    }, 
    values:{
        type: String,
    }, 
    createdTime : {
        type : Date,
        default : Date.now
    }    
})

const CatalogAdvancedAttributesTable = new mongoose.Schema({     
    Attribute :[Attributes], 
    Product_id :
    {
        type : String 
    },   
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("CatalogAdvancedAttributes",CatalogAdvancedAttributesTable);