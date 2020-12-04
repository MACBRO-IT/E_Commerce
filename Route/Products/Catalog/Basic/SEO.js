const express = require("express");
const router = express.Router();
const BasicSEORouter = require("../../../../Model/Products/Catalog/Basic/SEOTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data = await new  BasicSEORouter({  
        Product_id : req.body.Product_id,
        MetaURL:req.body.MetaURL,
        MetaTitle : req.body.MetaTitle,
        MetaDescription : req.body.MetaDescription 
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new BasicSEORouter.updateMany({Product_id:req.body.Product_id}, { $set :{ 
    MetaURL:req.body.MetaURL,
    MetaTitle : req.body.MetaTitle,
    MetaDescription : req.body.MetaDescription 
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await BasicSEORouter.find(); 
      res.json(data);
})  

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await BasicSEORouter.findOneAndDelete({Product_id :req.body.Product_id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})
 
module.exports = router;