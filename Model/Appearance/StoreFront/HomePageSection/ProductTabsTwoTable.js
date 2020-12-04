const mongoose =require("mongoose");

const ProductTabsTwoTable = new mongoose.Schema({  
    TabTwo_Id :
    {
        type: String,
        required : true
    },   
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
    Title1 :
    {
        type: String,
        required : true
    },
    Type1 :
    {
        type : String,
        required :true
    },
    ProductsLimit1 :
    {
        type : String,
        required :true
    },
    Title2 :
    {
        type: String,
        required : true
    },
    Type2 :
    {
        type : String,
        required :true
    },
    ProductsLimit2 :
    {
        type : String,
        required :true
    },
    Title3 :
    {
        type: String,
        required : true
    },
    Type3 :
    {
        type : String,
        required :true
    },
    Category3 :
    {
        type : String,
        required :true
    },
    Title4 :
    {
        type: String,
        required : true
    },
    Type4 :
    {
        type : String,
        required :true
    },
    Category4 :
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