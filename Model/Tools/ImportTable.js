const mongoose =require("mongoose");

const ImportTable = new mongoose.Schema({    
    Import_Id :
    {
        type: String,
        required : true
    }, 
    CSVFile :
    {
        type: String,
        required : true
    },
    ImportType :
    {
        type: String,
        required : true
    },
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("Import",ImportTable);