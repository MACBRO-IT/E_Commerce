const mongoose =require("mongoose");

const InstamojoTable = new mongoose.Schema({    
    Instamoj_Id :
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
    Description :
    {
        type : String,
        required :true
    },
    Sandbox : 
    {
        type : String,
        required :true
    },
    APIKey :
    {
        type : String,
        required :true
    },
    AuthToken : {
        type : String,
        required :true
    },  
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("Instamojo",InstamojoTable);