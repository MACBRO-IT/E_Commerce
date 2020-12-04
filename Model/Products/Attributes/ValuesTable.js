const mongoose =require("mongoose");

const AttributesValuesTable = new mongoose.Schema({     
     
    Attribute_Id :
    {
        type: String,
        required : true
    },
    Value :
    {
        type: String,
        required : true
    },
    
    createdTime : {
        type : Date,
        default : Date.now
    }    

})
module.exports = mongoose.model ("AttributesValues",AttributesValuesTable);