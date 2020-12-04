const mongoose =require("mongoose");

const OneColumnBannerTable = new mongoose.Schema({     
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
    Window :
    {
        type : String,
        required :true
    },
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("OneColumnBanner",OneColumnBannerTable);