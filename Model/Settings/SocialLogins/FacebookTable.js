const mongoose =require("mongoose");

const SettingFacebookTable = new mongoose.Schema({     
    Status :
    {
        type: String,
        required : true
    },
    AppID :
    {
        type: String,
        required : true
    },
    AppSecret :
    {
        type : String,
        required :true
    },
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("SettingFacebook",SettingFacebookTable);