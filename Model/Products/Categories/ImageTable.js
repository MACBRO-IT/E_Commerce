const mongoose =require("mongoose");

const CategoriesImageTable = new mongoose.Schema({     
    Logo :
    {
        type: String,
        required : true
    },
    Banner :
    {
        type: String,
        required : true
    },
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("CategoriesImage",CategoriesImageTable);