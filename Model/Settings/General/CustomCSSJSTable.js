const mongoose =require("mongoose");

const SettingCustomCSSJSTable = new mongoose.Schema({     
    Custom_Id :
    {
        type: String,
        required : true
    },
    Header :
    {
        type: String,
        required : true
    },
    Footer :
    {
        type: String,
        required : true
    },
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("SettingCustomCSSJS",SettingCustomCSSJSTable);