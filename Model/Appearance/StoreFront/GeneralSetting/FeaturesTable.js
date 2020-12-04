const mongoose =require("mongoose");

const StoreFrontFeaturesTable = new mongoose.Schema({     
    Features_Id :
    {
        type: String,
        required : true
    },
    SectionStatus :
    {
        type: String,
        required : true
    },
    Title1 :
    {
        type: String,
        required : true
    },
    Subtitle1 :
    {
        type : String,
        required :true
    },
    Icon1 :
    {
        type : String,
        required :true
    },
    Title2 :
    {
        type: String,
        required : true
    },
    Subtitle2 :
    {
        type : String,
        required :true
    },
    Icon2 :
    {
        type : String,
        required :true
    },
    Title3 :
    {
        type: String,
        required : true
    },
    Subtitle3 :
    {
        type : String,
        required :true
    },
    Icon3 :
    {
        type : String,
        required :true
    },
    Title4 :
    {
        type: String,
        required : true
    },
    Subtitle4 :
    {
        type : String,
        required :true
    },
    Icon4 :
    {
        type : String,
        required :true
    },
    Title5 :
    {
        type: String,
        required : true
    },
    Subtitle5 :
    {
        type : String,
        required :true
    },
    Icon5 :
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