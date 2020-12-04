const express = require("express");
const router = express.Router();
const SettingMaintenanceRouter = require("../../../Model/Settings/General/MaintenanceTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  SettingMaintenanceRouter({   
        Maintenance_Id : req.body.Maintenance_Id,
        MaintenanceMode : req.body.MaintenanceMode, 
         
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new SettingMaintenanceRouter.updateMany({
    Maintenance_Id : req.body.Maintenance_Id}, { $set :{
        MaintenanceMode : req.body.MaintenanceMode, 
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await SettingMaintenanceRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await SettingMaintenanceRouter.findOneAndDelete({
        Maintenance_Id : req.body.Maintenance_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;