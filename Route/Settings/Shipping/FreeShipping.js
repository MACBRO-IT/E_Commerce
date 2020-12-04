const express = require("express");
const router = express.Router();
const SettingFreeShippingRouter = require("../../../Model/Settings/Shipping/FreeShippingTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  SettingFreeShippingRouter({   
        FreeShipping_Id : req.body.FreeShipping_Id,
        Status : req.body.Status, 
        Label : req.body.Label,
        MinimumAmount : req.body.MinimumAmount,  
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new SettingFreeShippingRouter.updateMany({
    FreeShipping_Id : req.body.FreeShipping_Id}, { $set :{
        Status : req.body.Status, 
        Label : req.body.Label,
        MinimumAmount : req.body.MinimumAmount,  

  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await SettingFreeShippingRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await SettingFreeShippingRouter.findOneAndDelete({
        FreeShipping_Id : req.body.FreeShipping_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;