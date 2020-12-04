const mongoose =require("mongoose");

const ValuesTable= new mongoose.Schema({
    
    Value:{
        type: String,
    }, 
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
const AttributesValuesTable = new mongoose.Schema({     
     
    Value :[ValuesTable],
    Attribute_Id : {
        type: String
    }, 
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("AttributesValues",AttributesValuesTable);