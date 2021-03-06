const mongoose =require("mongoose");

const ThreeColumnFullWidthBannersTable = new mongoose.Schema({     
    SectionStatus :
    {
        type: String,
        required : true
    },
    Background :
    {
        type: String,
        required : true
    },
    CalltoActionURL :
    {
        type : String,
        required :true
    },
    window :
    {
        type : String,
        required :true
    },
  
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("ThreeColumnFullWidthBanners",ThreeColumnFullWidthBannersTable);