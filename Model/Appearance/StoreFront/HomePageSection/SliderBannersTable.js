const mongoose =require("mongoose");

const SliderBannerTable = new mongoose.Schema({   
    Slider_Id :
    {
        type: String,
        required : true
    },  
    CalltoActionURL :
    {
        type: String,
        required : true
    },
    window :
    {
        type: String,
        required : true
    },
    
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("SliderBanner",SliderBannerTable);