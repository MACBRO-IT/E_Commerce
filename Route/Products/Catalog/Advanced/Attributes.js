const express = require("express");
const router = express.Router();
const AdvancedAttributesRouter = require("../../../../Model/Products/Catalog/Advanced/AttributesTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  AdvancedAttributesRouter({  
        Product_id : req.body.Product_id,
        Attribute : req.body.Attribute,
        Values : req.body.Values 
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new AdvancedAttributesRouter.updateMany({Product_id:req.body.Product_id}, { $set :{
    Attribute : req.body.Attribute,
    Values : req.body.Values  
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await AdvancedAttributesRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await AdvancedAttributesRouter.findOneAndDelete({Product_id :req.body.Product_id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;