const express = require("express");
const router = express.Router();
const FeaturedCategoriesRouter = require("../../../../Model/Appearance/StoreFront/HomePageSection/FeaturedCategoriesTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  FeaturedCategoriesRouter({   
        Featured_Id : req.body.Featured_Id,
        SectionStatus : req.body.SectionStatus,
        SectionTitle : req.body.SectionTitle,
        SectionSubtitle : req.body.SectionSubtitle,
        Category1 : req.body.Category1,
        Type1 : req.body.Type1,
        Category2 : req.body.Category2,
        Type2 : req.body.Type2,
        Category3 : req.body.Category3,
        Type3 : req.body.Type3,
        Category4 : req.body.Category4,
        Type4 : req.body.Type4,
        Category5 : req.body.Category5,
        Type5 : req.body.Type5,
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new FeaturedCategoriesRouter.updateMany({
    Featured_Id : req.body.Featured_Id}, { $set :{
        SectionStatus : req.body.SectionStatus,
        SectionTitle : req.body.SectionTitle,
        SectionSubtitle : req.body.SectionSubtitle,
        Category1 : req.body.Category1,
        Type1 : req.body.Type1,
        Category2 : req.body.Category2,
        Type2 : req.body.Type2,
        Category3 : req.body.Category3,
        Type3 : req.body.Type3,
        Category4 : req.body.Category4,
        Type4 : req.body.Type4,
        Category5 : req.body.Category5,
        Type5 : req.body.Type5,
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await FeaturedCategoriesRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await FeaturedCategoriesRouter.findOneAndDelete({
        Featured_Id : req.body.Featured_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;