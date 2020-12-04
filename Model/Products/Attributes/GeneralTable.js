const mongoose =require("mongoose");

const AttributesGeneralTable = new mongoose.Schema({     
    AttributeSet :
    {
        type: String,
        required : true
    },
    Name :
    {
        type: String,
        required : true
    },
    Categories : 
    {
        type: String,
        
    },
    Filterable : 
    {
        type: String,
        required : true
    },
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("AttributesGeneral",AttributesGeneralTable);