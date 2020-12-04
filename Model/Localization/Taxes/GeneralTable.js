const mongoose =require("mongoose");

const TaxesGeneralTable = new mongoose.Schema({     
    Tax_Id :
    {
        type: String,
        required : true
    },
    TaxClass :
    {
        type: String,
        required : true
    },
    BasedOn :
    {
        type: String,
        required : true
    },
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("TaxesGeneral",TaxesGeneralTable);