const mongoose =require("mongoose");

const AttributeSetGeneralTable = new mongoose.Schema({     
    AttributeSet_Id :
    {
        type: String,
        required : true
    },
    Name :
    {
        type: String,
        required : true
    },
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("AttributeSetGeneral",AttributeSetGeneralTable);