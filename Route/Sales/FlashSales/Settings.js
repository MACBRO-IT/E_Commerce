const express = require("express");
const router = express.Router();
const FlashSalesSettingsRouter = require("../../../Model/Sales/FlashSales/SettingsTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  FlashSalesSettingsRouter({   
        Settings_Id : req.body.Settings_Id,
        CampaignName : req.body.CampaignName, 
        
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new FlashSalesSettingsRouter.updateMany({
    Settings_Id : req.body.Settings_Id,}, { $set :{
     
        CampaignName : req.body.CampaignName, 
         
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await FlashSalesSettingsRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await FlashSalesSettingsRouter.findOneAndDelete({
        Settings_Id : req.body.Settings_Id,}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;