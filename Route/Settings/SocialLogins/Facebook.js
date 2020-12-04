const express = require("express");
const router = express.Router();
const SettingFacebookRouter = require("../../../Model/Settings/SocialLogins/FacebookTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  SettingFacebookRouter({   
        Fb_Id : req.body.Fb_Id,
        Status : req.body.Status, 
        AppID : req.body.AppID,
        AppSecret : req.body.AppSecret,  
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new SettingFacebookRouter.updateMany({
    Fb_Id : req.body.Fb_Id}, { $set :{
        Status : req.body.Status, 
        AppID : req.body.AppID,
        AppSecret : req.body.AppSecret,  

  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await SettingFacebookRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await SettingFacebookRouter.findOneAndDelete({
        Fb_Id : req.body.Fb_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;