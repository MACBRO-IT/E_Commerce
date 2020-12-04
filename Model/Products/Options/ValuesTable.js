const mongoose =require("mongoose");

const ValuesTable = new mongoose.Schema({     
    OptionsValue_Id :
    {
        type: String,
        
    },
    Label :
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

const OptionsValuesTable = new mongoose.Schema({     
     
    Label :[ValuesTable],
    Attribute_Id : {
        type: String
    }, 
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("OptionsValues",OptionsValuesTable);