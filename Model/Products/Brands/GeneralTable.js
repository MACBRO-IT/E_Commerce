const mongoose =require("mongoose");

const BrandsGeneralTable = new mongoose.Schema({     
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
    Brand_Id :
    {
        type: String,
        required : true
    },
    
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("BrandsGeneral",BrandsGeneralTable);