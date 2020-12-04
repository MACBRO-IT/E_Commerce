const express = require("express");
const router = express.Router();
const SlidesRouter = require("../../../Model/Appearance/Sliders/Slides/GeneralTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  SlidesRouter({   
        Slides_Id : req.body.Slides_Id,
        Image : req.body.Image,
        Caption1 : req.body.Caption1, 
        Caption2 : req.body.Caption2, 
        Direction : req.body.Direction, 
        CalltoActionText : req.body.CalltoActionText, 
        CalltoActionURL : req.body.CalltoActionURL,
        window :  req.body.window
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new SlidesRouter.updateMany({
    Slides_Id : req.body.Slides_Id}, { $set :{
        Image : req.body.Image,
        Caption1 : req.body.Caption1, 
        Caption2 : req.body.Caption2, 
        Direction : req.body.Direction, 
        CalltoActionText : req.body.CalltoActionText, 
        CalltoActionURL : req.body.CalltoActionURL,
        window :  req.body.window
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await SlidesRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await SlidesRouter.findOneAndDelete({
        Slides_Id : req.body.Slides_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;