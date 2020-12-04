const mongoose =require("mongoose");

const SettingFlatRateTable = new mongoose.Schema({  
    FlatRate_Id :
    {
        type: String,
        required : true
    },   
    Status :
    {
        type: String,
        required : true
    },
    Label :
    {
        type: String,
        required : true
    },
    Cost :
    {
        type : String,
        required :true
    },
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("SettingFlatRate",SettingFlatRateTable);