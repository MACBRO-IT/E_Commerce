const mongoose =require("mongoose");

const FeaturedCategoriesTable = new mongoose.Schema({     
    Featured_Id :
    {
        type: String,
        required : true
    },
    SectionStatus :
    {
        type: String,
        required : true
    },
    SectionTitle :
    {
        type: String,
        required : true
    },
    SectionSubtitle :
    {
        type : String,
        required :true
    },
    Category1 :
    {
        type : String,
        required :true
    },
    Type1 : {
        type : String,
        required :true
    },  
    Category2 :
    {
        type : String,
        required :true
    },
    Type2 : {
        type : String,
        required :true
    },  
    Category3 :
    {
        type : String,
        required :true
    },
    Type3 : {
        type : String,
        required :true
    },  
    Category4 :
    {
        type : String,
        required :true
    },
    Type4 : {
        type : String,
        required :true
    },  
    Category5 :
    {
        type : String,
        required :true
    },
    Type5 : {
        type : String,
        required :true
    },  
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("FeaturedCategories",FeaturedCategoriesTable);