const express = require("express");
const router = express.Router();
const SettingCurrencyRouter = require("../../../Model/Settings/General/CurrencyTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  SettingCurrencyRouter({   
        Currency_Id : req.body.Currency_Id,
        SupportedCurrencies : req.body.SupportedCurrencies,
        DefaultCurrency : req.body.DefaultCurrency,  
        ExchangeRateService : req.body.ExchangeRateService,
        AutoRefresh : req.body.AutoRefresh,
        Frequency : req.body.Frequency,
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new SettingCurrencyRouter.updateMany({
    Currency_Id : req.body.Currency_Id}, { $set :{
        SupportedCurrencies : req.body.SupportedCurrencies,
        DefaultCurrency : req.body.DefaultCurrency,  
        ExchangeRateService : req.body.ExchangeRateService,
        AutoRefresh : req.body.AutoRefresh,
        Frequency : req.body.Frequency,
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await SettingCurrencyRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await SettingCurrencyRouter.findOneAndDelete({
        Currency_Id : req.body.Currency_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;