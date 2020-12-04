const express = require("express");
const router = express.Router();
const BrandSEORouter = require("../../../Model/Products/Brands/SEOTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  BrandSEORouter({  
        Brand_Id : req.body.Brand_Id,
        MetaTitle : req.body.MetaTitle,
        MetaDescription : req.body.MetaDescription,
        MetaURL : req.body.MetaURL  
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new BrandSEORouter.updateMany({Brand_Id:req.body.Brand_Id}, { $set :{
    MetaTitle : req.body.MetaTitle,
    MetaDescription : req.body.MetaDescription,
    MetaURL : req.body.MetaURL 
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await BrandSEORouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await BrandSEORouter.findOneAndDelete({Brand_Id :req.body.Brand_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;