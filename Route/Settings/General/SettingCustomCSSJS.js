const express = require("express");
const router = express.Router();
const SettingCustomCSSJSRouter = require("../../../Model/Settings/General/CustomCSSJSTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  SettingCustomCSSJSRouter({   
        Custom_Id : req.body.Custom_Id,
        Header : req.body.Header,
        Footer : req.body.Footer,   
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new SettingCustomCSSJSRouter.updateMany({
    Custom_Id : req.body.Custom_Id}, { $set :{
        Header : req.body.Header,
        Footer : req.body.Footer,   
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await SettingCustomCSSJSRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await SettingCustomCSSJSRouter.findOneAndDelete({
        Custom_Id : req.body.Custom_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;