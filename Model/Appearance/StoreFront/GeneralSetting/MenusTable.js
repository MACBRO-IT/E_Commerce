const mongoose =require("mongoose");

const StoreFrontMenuTable = new mongoose.Schema({ 
    Menu_Id :
    {
        type: String,
        required : true
    },    
    NavbarText :
    {
        type: String,
        required : true
    },
    PrimaryMenu :
    {
        type: String,
        required : true
    },
    CategoryMenu :
    {
        type : String,
        required :true
    },
    FooterMenuOneTitle :
    {
        type : String,
        required :true
    },
    FooterMenuOne :
    {
        type: String,
        required : true
    },
    FooterMenuTwoTitle :
    {
        type: String,
        required : true
    },
    FooterMenuTwo :
    {
        type : String,
        required :true
    },   
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("StoreFrontMenu",StoreFrontMenuTable);