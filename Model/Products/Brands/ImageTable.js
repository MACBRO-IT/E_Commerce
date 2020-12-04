const mongoose =require("mongoose");

const BrandsImageTable = new mongoose.Schema({     
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
module.exports = mongoose.model ("BrandsImage",BrandsImageTable);