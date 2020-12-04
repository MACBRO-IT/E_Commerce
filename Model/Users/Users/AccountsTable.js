const mongoose =require("mongoose");

const UsersAccountTable = new mongoose.Schema({     
    FirstName :
    {
        type: String,
        required : true
    },
    LastName :
    {
        type: Date,
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