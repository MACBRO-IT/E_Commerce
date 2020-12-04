const mongoose =require("mongoose");

const ImportTable = new mongoose.Schema({     
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