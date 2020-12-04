const mongoose =require("mongoose");

const FeaturedCategoriesTable = new mongoose.Schema({     
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
    Category :
    {
        type : String,
        required :true
    },
    Type : {
        type : String,
        required :true
    },  
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("FeaturedCategories",FeaturedCategoriesTable);