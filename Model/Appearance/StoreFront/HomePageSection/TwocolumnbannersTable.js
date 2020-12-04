const mongoose =require("mongoose");

const TwocolumnbannersTable = new mongoose.Schema({   
    TwoColumn_Id :
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
module.exports = mongoose.model ("Twocolumnbanners",TwocolumnbannersTable);