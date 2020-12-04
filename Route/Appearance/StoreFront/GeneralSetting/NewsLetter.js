const express = require("express");
const router = express.Router();
const StoreFrontNewsletterRouter = require("../../../../Model/Appearance/StoreFront/GeneralSetting/NewsletterTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  StoreFrontNewsletterRouter({   
        NewsLetter_Id : req.body.NewsLetter_Id,
        BackgroundImage : req.body.BackgroundImage, 
        
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new StoreFrontNewsletterRouter.updateMany({
    NewsLetter_Id : req.body.NewsLetter_Id}, { $set :{
        BackgroundImage : req.body.BackgroundImage,
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await StoreFrontNewsletterRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await StoreFrontNewsletterRouter.findOneAndDelete({
        NewsLetter_Id : req.body.NewsLetter_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;