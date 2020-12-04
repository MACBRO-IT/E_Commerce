const mongoose =require("mongoose");

const StoreFrontProductTable = new mongoose.Schema({     
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