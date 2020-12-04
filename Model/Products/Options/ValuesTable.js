const mongoose =require("mongoose");

const OptionsValuesTable = new mongoose.Schema({     
    OptionsValue_Id :
    {
        type: String,
        required : true
    },
    Price :
    {
        type: String,
        required : true
    },
    PriceType :
    {
        type: String,
        required : true
    },
    
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("OptionsValues",OptionsValuesTable);