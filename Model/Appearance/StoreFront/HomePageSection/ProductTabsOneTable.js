const mongoose =require("mongoose");

const ProductTabsOneTable = new mongoose.Schema({     
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
    Type :
    {
        type : String,
        required :true
    },
    Category :
    {
        type : String,
        required :true
    },
  
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("ProductTabsOne",ProductTabsOneTable);