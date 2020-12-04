const mongoose =require("mongoose");

const MenuTable = new mongoose.Schema({  
    Menu_Id :
    {
        type: String,
        required : true
    },   
    Name :
    {
        type: String,
        required : true
    },
    Status :
    {
        type: String,
        required : true
    },
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("Menu",MenuTable);