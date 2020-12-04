const express = require("express");
const router = express.Router();
const StoreFrontRouter = require("../../../../Model/Appearance/StoreFront/GeneralSetting/GeneralTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  StoreFrontRouter({   
        General_Id : req.body.General_Id,
        WelcomeText : req.body.WelcomeText,
        ThemeColor : req.body.ThemeColor, 
        MailThemeColor : req.body.MailThemeColor,  
        Slider : req.body.Slider,
        TermsConditionsPage : req.body.TermsConditionsPage,
        PrivacyPolicyPage : req.body.PrivacyPolicyPage,
        Address : req.body.Address,
        
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new StoreFrontRouter.updateMany({
    General_Id : req.body.General_Id}, { $set :{
        WelcomeText : req.body.WelcomeText,
        ThemeColor : req.body.ThemeColor, 
        MailThemeColor : req.body.MailThemeColor,  
        Slider : req.body.Slider,
        TermsConditionsPage : req.body.TermsConditionsPage,
        PrivacyPolicyPage : req.body.PrivacyPolicyPage,
        Address : req.body.Address,  
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await StoreFrontRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await StoreFrontRouter.findOneAndDelete({
        General_Id : req.body.General_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;