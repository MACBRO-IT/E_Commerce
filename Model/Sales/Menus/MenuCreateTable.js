const mongoose =require("mongoose");

const MenuCreateTable = new mongoose.Schema({     
    MenuCreate_Id :
    {
        type: String,
        required : true
    },
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
    Category :
    {
        type: String,
        required : true
    },
    Icon :
    {
        type: String,
        required : true
    },
    Fluid_Menu :
    {
        type: String,
        required : true
    },
    Target :
    {
        type: String,
        required : true
    },
    Parent_Menu_Item :
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
module.exports = mongoose.model ("MenuCreate",MenuCreateTable);