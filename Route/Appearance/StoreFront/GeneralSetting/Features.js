const express = require("express");
const router = express.Router();
const StoreFrontFeaturesRouter = require("../../../../Model/Appearance/StoreFront/GeneralSetting/FeaturesTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  StoreFrontFeaturesRouter({   
        Features_Id : req.body.Features_Id,
        SectionStatus : req.body.SectionStatus,
        Title1 : req.body.Title1, 
        Subtitle1 : req.body.Subtitle1, 
        Icon1 : req.body.Icon1, 
        Title2 : req.body.Title2, 
        Subtitle2 : req.body.Subtitle2, 
        Icon2 : req.body.Icon2, 
        Title3 : req.body.Title3, 
        Subtitle3 : req.body.Subtitle3, 
        Icon3 : req.body.Icon3, 
        Title4 : req.body.Title4, 
        Subtitle4 : req.body.Subtitle4, 
        Icon4 : req.body.Icon4, 
        Title5 : req.body.Title5, 
        Subtitle5 : req.body.Subtitle5, 
        Icon5 : req.body.Icon5, 
        
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new StoreFrontFeaturesRouter.updateMany({
    Features_Id : req.body.Features_Id}, { $set :{
        SectionStatus : req.body.SectionStatus,
        Title1 : req.body.Title1, 
        Subtitle1 : req.body.Subtitle1, 
        Icon1 : req.body.Icon1, 
        Title2 : req.body.Title2, 
        Subtitle2 : req.body.Subtitle2, 
        Icon2 : req.body.Icon2, 
        Title3 : req.body.Title3, 
        Subtitle3 : req.body.Subtitle3, 
        Icon3 : req.body.Icon3, 
        Title4 : req.body.Title4, 
        Subtitle4 : req.body.Subtitle4, 
        Icon4 : req.body.Icon4, 
        Title5 : req.body.Title5, 
        Subtitle5 : req.body.Subtitle5, 
        Icon5 : req.body.Icon5,  
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await StoreFrontFeaturesRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await StoreFrontFeaturesRouter.findOneAndDelete({
        Features_Id : req.body.Features_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;