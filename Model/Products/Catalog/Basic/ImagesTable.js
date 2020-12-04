const mongoose =require("mongoose");

const CatalogBasicImagesTable = new mongoose.Schema({     
    BaseImage :
    {
        type: String,
        required : true
    },
    AdditionalImage :
    {
        type: String,
        required : true
    },
    Product_id :
    {
        type: String 
    },
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("CatalogBasicImages",CatalogBasicImagesTable);