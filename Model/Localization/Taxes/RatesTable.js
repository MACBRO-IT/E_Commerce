const mongoose =require("mongoose");

const TaxesRatesTable = new mongoose.Schema({   
    Rates_Id :
    {
        type: String,
        required : true
    },  
    TaxName :
    {
        type: String,
        required : true
    },
    Country :
    {
        type: String,
        required : true
    },
    State :
    {
        type: String,
        required : true 
    },
    City :
    {
        type: String,
        required : true
    },
    Zip :
    {
        type: String,
        required : true 
    },
    Rate :
    {
        type: String,
        required : true
    },
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("TaxesRates",TaxesRatesTable);