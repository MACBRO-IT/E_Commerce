const mongoose =require("mongoose");

const FlashSalesSettingsTable = new mongoose.Schema({   
    Settings_Id :
    {
        type: String,
        required : true
    },  
    CampaignName :
    {
        type: String,
        required : true
    },
    
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("FlashSalesSettings",FlashSalesSettingsTable);