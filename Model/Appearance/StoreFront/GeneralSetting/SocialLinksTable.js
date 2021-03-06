const mongoose =require("mongoose");

const StoreFrontSocialLinksTable = new mongoose.Schema({     
    Facebook :
    {
        type: String,
        required : true
    },
    Twitter :
    {
        type: String,
        required : true
    },
    Instagram :
    {
        type : String,
        required :true
    },
    Youtube :
    {
        type : String,
        required :true
    },
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("StoreFrontSocialLinks",StoreFrontSocialLinksTable);