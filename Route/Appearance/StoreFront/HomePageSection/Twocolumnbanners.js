const express = require("express");
const router = express.Router();
const TwocolumnbannersRouter = require("../../../../Model/Appearance/StoreFront/HomePageSection/TwocolumnbannersTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  TwocolumnbannersRouter({   
        TwoColumn_Id : req.body.TwoColumn_Id,
        SectionStatus : req.body.SectionStatus,
        CalltoActionURL : req.body.CalltoActionURL, 
        window : req.body.window
  
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new TwocolumnbannersRouter.updateMany({
    TwoColumn_Id : req.body.TwoColumn_Id}, { $set :{
        SectionStatus : req.body.SectionStatus,
        TopBrands : req.body.TopBrands, 
        CalltoActionURL : req.body.CalltoActionURL, 
        window : req.body.window
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await TwocolumnbannersRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await TwocolumnbannersRouter.findOneAndDelete({
        TwoColumn_Id : req.body.TwoColumn_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;