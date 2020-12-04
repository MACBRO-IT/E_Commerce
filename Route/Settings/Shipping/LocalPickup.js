const express = require("express");
const router = express.Router();
const SettingLocalPickupRouter = require("../../../Model/Settings/Shipping/LocalPickupTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  SettingLocalPickupRouter({   
        Local_Id : req.body.Local_Id,
        Status : req.body.Status, 
        Label : req.body.Label,
        Cost : req.body.Cost,  
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new SettingLocalPickupRouter.updateMany({
    Local_Id : req.body.Local_Id}, { $set :{
        Status : req.body.Status, 
        Label : req.body.Label,
        Cost : req.body.Cost,  

  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await SettingLocalPickupRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await SettingLocalPickupRouter.findOneAndDelete({
        Local_Id : req.body.Local_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;