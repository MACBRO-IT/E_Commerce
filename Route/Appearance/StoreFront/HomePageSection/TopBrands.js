const express = require("express");
const router = express.Router();
const TopBrandsRouter = require("../../../../Model/Appearance/StoreFront/HomePageSection/TopBrandsTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  TopBrandsRouter({   
        TopBrand_Id : req.body.TopBrand_Id,
        SectionStatus : req.body.SectionStatus,
        TopBrands : req.body.TopBrands, 
  
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new TopBrandsRouter.updateMany({
    TopBrand_Id : req.body.TopBrand_Id}, { $set :{
        SectionStatus : req.body.SectionStatus,
        TopBrands : req.body.TopBrands, 
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await TopBrandsRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await TopBrandsRouter.findOneAndDelete({
        TopBrand_Id : req.body.TopBrand_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;