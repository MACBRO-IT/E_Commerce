const mongoose =require("mongoose");

const StoreFrontFeaturesTable = new mongoose.Schema({     
    SectionStatus :
    {
        type: String,
        required : true
    },
    Title :
    {
        type: String,
        required : true
    },
    Subtitle :
    {
        type : String,
        required :true
    },
    Icon :
    {
        type : String,
        required :true
    },
  
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("StoreFrontFeatures",StoreFrontFeaturesTable);