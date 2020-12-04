const mongoose =require("mongoose");

const CategoriesGeneralTable = new mongoose.Schema({     
    Name :
    {
        type: String,
        required : true
    },
    Searchable :
    {
        type: String,
        required : true
    },
    Status :
    {
        type : String,
        required :true
    },
    Category_Id :
    {
        type : String,
        required :true
    },
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("CategoriesGeneral",CategoriesGeneralTable);