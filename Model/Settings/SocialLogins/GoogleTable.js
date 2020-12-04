const mongoose =require("mongoose");

const SettingGoogleTable = new mongoose.Schema({     
    Google_Id :
    {
        type: String,
        required : true
    },
    Status :
    {
        type: String,
        required : true
    },
    ClientID :
    {
        type: String,
        required : true
    },
    ClientSecret :
    {
        type : String,
        required :true
    },
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("SettingGoogle",SettingGoogleTable);