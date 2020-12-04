const mongoose =require("mongoose");

const SettingStoreTable = new mongoose.Schema({     
    Store_Id :
    {
        type: String,
        required : true
    },
    Name :
    {
        type: String,
        required : true
    },
    Tagline :
    {
        type: String,
        required : true
    },
    Phone :
    {
        type : String,
        required :true
    },
    Email :
    {
        type : String,
        required :true
    },
    Address1 : {
        type : String,
        required :true
    },
    Address2 :
    {
        type : String,
        required :true
    },
    City :
    {
        type : String,
        required :true
    },
    Country : {
        type : String,
        required :true
    },
    State :
    {
        type : String,
        required :true
    },
    Zip :
    {
        type : String,
        required :true
    },  
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("SettingStore",SettingStoreTable);