const express = require("express");
const router = express.Router();
const TaxesRatesRouter = require("../../Model/Localization/Taxes/RatesTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  TaxesRatesRouter({   
        Rates_Id : req.body.Rates_Id,
        TaxName : req.body.TaxName,
        Country : req.body.Country, 
        State : req.body.State, 
        City : req.body.City, 
        Zip : req.body.Zip, 
        Rate : req.body.Rate, 
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new TaxesRatesRouter.updateMany({
    Rates_Id : req.body.Rates_Id}, { $set :{
        TaxName : req.body.TaxName,
        Country : req.body.Country, 
        State : req.body.State, 
        City : req.body.City, 
        Zip : req.body.Zip, 
        Rate : req.body.Rate, 
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await TaxesRatesRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await TaxesRatesRouter.findOneAndDelete({
        Rates_Id : req.body.Rates_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;