const mongoose =require("mongoose");

const SettingMailTable = new mongoose.Schema({    
    Mail_Id :
    {
        type: String,
        required : true
    }, 
    FromAddress :
    {
        type: String,
        required : true
    },
    FromName :
    {
        type: String,
        required : true
    },
    Host :
    {
        type : String,
        required :true
    },
    Port :
    {
        type : String,
        required :true
    },
    Username : {
        type : String,
        required :true
    },  
    Password : {
        type : String,
        required :true
    }, 
    Encryption : {
        type : String,
        required :true
    },  
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("SettingMail",SettingMailTable);