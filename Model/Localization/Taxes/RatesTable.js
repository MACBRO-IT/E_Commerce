const mongoose =require("mongoose");

const RatesTable = new mongoose.Schema({     
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

const TaxesRatesTable = new mongoose.Schema({     
     
    TaxName :[RatesTable],
    Rates_Id : {
        type: String
    }, 
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("TaxesRates",TaxesRatesTable);