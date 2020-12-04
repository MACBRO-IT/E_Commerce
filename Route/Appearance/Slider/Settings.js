const express = require("express");
const router = express.Router();
const SlidersSettingsRouter = require("../../../Model/Appearance/Sliders/SettingsTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  SlidersSettingsRouter({   
        Settings_Id : req.body.Settings_Id,
        Name : req.body.Name,
        Speed : req.body.Speed, 
        Fade : req.body.Fade, 
        Autoplay : req.body.Autoplay, 
        AutoplaySpeed : req.body.AutoplaySpeed, 
        Dots : req.body.Dots, 
        Arrows : req.body.Arrows, 
        
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new SlidersSettingsRouter.updateMany({
    Settings_Id : req.body.Settings_Id}, { $set :{
        Name : req.body.Name,
        Speed : req.body.Speed, 
        Fade : req.body.Fade, 
        Autoplay : req.body.Autoplay, 
        AutoplaySpeed : req.body.AutoplaySpeed, 
        Dots : req.body.Dots, 
        Arrows : req.body.Arrows,
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await SlidersSettingsRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await SlidersSettingsRouter.findOneAndDelete({
        Settings_Id : req.body.Settings_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;