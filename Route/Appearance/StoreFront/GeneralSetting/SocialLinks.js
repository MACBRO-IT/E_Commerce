const express = require("express");
const router = express.Router();
const StoreFrontSocialLinksRouter = require("../../../../Model/Appearance/StoreFront/GeneralSetting/SocialLinksTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  StoreFrontSocialLinksRouter({   
        Social_Id : req.body.Social_Id,
        Facebook : req.body.Facebook,
        Twitter : req.body.Twitter,
        Instagram : req.body.Instagram,
        Youtube : req.body.Youtube,
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new StoreFrontSocialLinksRouter.updateMany({
    Social_Id : req.body.Social_Id}, { $set :{
        Facebook : req.body.Facebook,
        Twitter : req.body.Twitter,
        Instagram : req.body.Instagram,
        Youtube : req.body.Youtube, 
        
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await StoreFrontSocialLinksRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await StoreFrontSocialLinksRouter.findOneAndDelete({
        Social_Id : req.body.Social_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;