const express = require("express");
const router = express.Router();
const SettingGoogleRouter = require("../../../Model/Settings/SocialLogins/GoogleTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  SettingGoogleRouter({   
        Google_Id : req.body.Google_Id,
        Status : req.body.Status, 
        ClientID : req.body.ClientID,
        ClientSecret : req.body.ClientSecret,  
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new SettingGoogleRouter.updateMany({
    Google_Id : req.body.Google_Id}, { $set :{
        Status : req.body.Status, 
        ClientID : req.body.ClientID,
        ClientSecret : req.body.ClientSecret,  

  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await SettingGoogleRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await SettingGoogleRouter.findOneAndDelete({
        Google_Id : req.body.Google_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;