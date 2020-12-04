const mongoose =require("mongoose");

const SettingMaintenanceTable = new mongoose.Schema({ 
    Maintenance_Id :
    {
        type: String,
        required : true
    },     
    MaintenanceMode :
    {
        type: String,
        required : true
    }, 
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("SettingMaintenance",SettingMaintenanceTable);