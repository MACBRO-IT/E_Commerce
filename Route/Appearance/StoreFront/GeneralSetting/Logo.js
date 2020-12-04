const express = require("express");
const router = express.Router();
const StoreFrontLogoRouter = require("../../../../Model/Appearance/StoreFront/GeneralSetting/LogoTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  StoreFrontLogoRouter({   
        Logo_Id : req.body.Logo_Id,
        Favicon : req.body.Favicon,
        HeaderLogo : req.body.HeaderLogo, 
        MailLogo : req.body.MailLogo,  
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
  var update = await new StoreFrontLogoRouter.updateMany({
    Logo_Id : req.body.Logo_Id}, { $set :{
        Favicon : req.body.Favicon,
        HeaderLogo : req.body.HeaderLogo, 
        MailLogo : req.body.MailLogo,  
        Autoplay : req.body.Autoplay,
        AutoplaySpeed : req.body.AutoplaySpeed,
        Dots : req.body.Dots,
        Arrows : req.body.Arrows, 
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await StoreFrontLogoRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await StoreFrontLogoRouter.findOneAndDelete({
        Logo_Id : req.body.Logo_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;