const express = require("express");
const router = express.Router();
const ThreeColumnFullWidthBannersRouter = require("../../../../Model/Appearance/StoreFront/HomePageSection/ThreeColumnFullWidthBannersTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  ThreeColumnFullWidthBannersRouter({   
        FullBanner_Id : req.body.FullBanner_Id,
        SectionStatus : req.body.SectionStatus,
        Background : req.body.Background,
        CalltoActionURL : req.body.CalltoActionURL,
        window : req.body.window,  
  
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new ThreeColumnFullWidthBannersRouter.updateMany({
    FullBanner_Id : req.body.FullBanner_Id}, { $set :{
        SectionStatus : req.body.SectionStatus,
        Background : req.body.Background,
        CalltoActionURL : req.body.CalltoActionURL,
        window : req.body.window, 
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await ThreeColumnFullWidthBannersRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await ThreeColumnFullWidthBannersRouter.findOneAndDelete({
        FullBanner_Id : req.body.FullBanner_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;