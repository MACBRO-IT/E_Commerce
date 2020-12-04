const mongoose =require("mongoose");

const ThreeColumnBannersTable = new mongoose.Schema({  
    ThreeColumn_Id :
    {
        type: String,
        required : true
    },   
    SectionStatus :
    {
        type: String,
        required : true
    },
    CalltoActionURL :
    {
        type: String,
        required : true
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
module.exports = mongoose.model ("ThreeColumnBanners",ThreeColumnBannersTable);