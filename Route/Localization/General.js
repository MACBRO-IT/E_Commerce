const express = require("express");
const router = express.Router();
const TaxesRouter = require("../../Model/Localization/Taxes/GeneralTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  TaxesRouter({   
        Tax_Id : req.body.Tax_Id,
        TaxClass : req.body.TaxClass,
        BasedOn : req.body.BasedOn, 
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new TaxesRouter.updateMany({
    Tax_Id : req.body.Tax_Id}, { $set :{
        TaxClass : req.body.TaxClass,
        BasedOn : req.body.BasedOn,
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await TaxesRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await TaxesRouter.findOneAndDelete({
        Tax_Id : req.body.Tax_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;