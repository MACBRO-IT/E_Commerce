const express = require("express");
const router = express.Router();
const SlidesOptionsRouter = require("../../../Model/Appearance/Sliders/Slides/OptionsTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  SlidesOptionsRouter({   
        Options_Id : req.body.Options_Id,
        Delay : req.body.Delay,
        Effect : req.body.Effect, 
        
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new SlidesOptionsRouter.updateMany({
    Options_Id : req.body.Options_Id}, { $set :{
        Delay : req.body.Delay,
        Effect : req.body.Effect,
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await SlidesOptionsRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await SlidesOptionsRouter.findOneAndDelete({
        Options_Id : req.body.Options_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;