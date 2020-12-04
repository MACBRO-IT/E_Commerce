const mongoose =require("mongoose");

const RolesGeneralTable = new mongoose.Schema({     
    Roles_Id :
    {
        type: String,
        required : true
    }, 
    Name :
    {
        type: String,
        required : true
    },    
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("RolesGeneral",RolesGeneralTable);