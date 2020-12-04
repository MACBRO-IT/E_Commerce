const mongoose =require("mongoose");

const SettingCurrencyTable = new mongoose.Schema({   
    Currency_Id :
    {
        type: String,
        required : true
    },  
    SupportedCurrencies :
    {
        type: String,
        required : true
    },
    DefaultCurrency :
    {
        type: String,
        required : true
    },
    ExchangeRateService :
    {
        type : String,
        required :true
    },
    AutoRefresh :
    {
        type : String,
        required :true
    },
    Frequency : {
        type : String,
        required :true
    },
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("SettingCurrency",SettingCurrencyTable);