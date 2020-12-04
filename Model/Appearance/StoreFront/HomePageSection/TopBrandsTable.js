const mongoose =require("mongoose");

const TopBrandsTable = new mongoose.Schema({     
    SectionStatus :
    {
        type: String,
        required : true
    },
    TopBrands :
    {
        type: String,
        required : true
    },
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("TopBrands",TopBrandsTable);