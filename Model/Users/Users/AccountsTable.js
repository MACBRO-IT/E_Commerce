const mongoose =require("mongoose");

const UsersAccountTable = new mongoose.Schema({  
    Account_Id :
    {
        type: String,
        required : true
    },   
    FirstName :
    {
        type: String,
        required : true
    },
    LastName :
    {
        type: String,
        required : true
    },
    Email :
    {
        type : String,
        required :true
    },
    Roles :
    {
        type : String,
        required :true
    }, 
    Password :
    {
        type : String,
        required :true
    }, 
    ConfirmPassword :
    {
        type : String,
        required :true
    }, 
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("UsersAccount",UsersAccountTable);