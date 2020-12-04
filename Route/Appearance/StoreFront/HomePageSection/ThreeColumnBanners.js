const express = require("express");
const router = express.Router();
const ThreeColumnBannersRouter = require("../../../../Model/Appearance/StoreFront/HomePageSection/ThreeColumnBannersTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  ThreeColumnBannersRouter({   
        ThreeColumn_Id : req.body.ThreeColumn_Id,
        SectionStatus : req.body.SectionStatus,
        CalltoActionURL : req.body.CalltoActionURL,
        window : req.body.window,  
  
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new ThreeColumnBannersRouter.updateMany({
    ThreeColumn_Id : req.body.ThreeColumn_Id}, { $set :{
        SectionStatus : req.body.SectionStatus,
        CalltoActionURL : req.body.CalltoActionURL,
        window : req.body.window, 
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await ThreeColumnBannersRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await ThreeColumnBannersRouter.findOneAndDelete({
        ThreeColumn_Id : req.body.ThreeColumn_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;