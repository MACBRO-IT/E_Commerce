const mongoose =require("mongoose");

const StoreFrontProductTable = new mongoose.Schema({  
    ProductPage_Id :
    {
        type: String,
        required : true
    },   
    CalltoActionURL :
    {
        type: String,
        required : true
    },
    Window :
    {
        type: String,
        required : true
    }, 
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("StoreFrontProduct",StoreFrontProductTable);