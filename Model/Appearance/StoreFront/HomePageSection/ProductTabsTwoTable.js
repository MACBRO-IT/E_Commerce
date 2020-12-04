const mongoose =require("mongoose");

const ProductTabsTwoTable = new mongoose.Schema({     
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
    TabTitle :
    {
        type : String,
        required :true
    },
    Type :
    {
        type : String,
        required :true
    },
    ProductsLimit :
    {
        type : String,
        required :true
    },
  
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("ProductTabsTwo",ProductTabsTwoTable);