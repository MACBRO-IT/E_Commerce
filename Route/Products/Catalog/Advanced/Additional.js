const express = require("express");
const router = express.Router();
const AdvancedAdditionalRouter = require("../../../../Model/Products/Catalog/Advanced/AdditionalTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  AdvancedAdditionalRouter({  
        Product_id : req.body.Product_id,
        ShortDescription : req.body.ShortDescription,
        ProductNewFrom : req.body.ProductNewFrom,
        ProductNewTo : req.body.ProductNewTo, 
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new AdvancedAdditionalRouter.updateMany({Product_id:req.body.Product_id}, { $set :{
    ShortDescription : req.body.ShortDescription,
    ProductNewFrom : req.body.ProductNewFrom,
    ProductNewTo : req.body.ProductNewTo,  
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await AdvancedAdditionalRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await AdvancedAdditionalRouter.findOneAndDelete({Product_id :req.body.Product_id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;