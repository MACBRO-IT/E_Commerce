const express = require("express");
const router = express.Router();
const OneColumnBannerRouter = require("../../../../Model/Appearance/StoreFront/HomePageSection/OneColumnBannerTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  OneColumnBannerRouter({   
        OneColumn_Id : req.body.OneColumn_Id,
        SectionStatus : req.body.SectionStatus,
        CalltoActionURL : req.body.CalltoActionURL,
        Window : req.body.Window, 
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new OneColumnBannerRouter.updateMany({
    OneColumn_Id : req.body.OneColumn_Id}, { $set :{
        SectionStatus : req.body.SectionStatus,
        CalltoActionURL : req.body.CalltoActionURL,
        Window : req.body.Window,
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await OneColumnBannerRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await OneColumnBannerRouter.findOneAndDelete({
        Featured_Id : req.body.Featured_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;