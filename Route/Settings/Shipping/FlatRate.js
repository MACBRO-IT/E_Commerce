const express = require("express");
const router = express.Router();
const SettingFlatRateRouter = require("../../../Model/Settings/Shipping/FlatRateTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  SettingFlatRateRouter({   
        FlatRate_Id : req.body.FlatRate_Id,
        Status : req.body.Status, 
        Label : req.body.Label,
        Cost : req.body.Cost,  
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new SettingFlatRateRouter.updateMany({
    FlatRate_Id : req.body.FlatRate_Id}, { $set :{
        Status : req.body.Status, 
        Label : req.body.Label,
        Cost : req.body.Cost,  

  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await SettingFlatRateRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await SettingFlatRateRouter.findOneAndDelete({
        FlatRate_Id : req.body.FlatRate_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;