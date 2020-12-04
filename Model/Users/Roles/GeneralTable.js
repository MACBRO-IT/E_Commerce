const mongoose =require("mongoose");

const RolesGeneralTable = new mongoose.Schema({     
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