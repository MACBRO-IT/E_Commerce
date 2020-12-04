const express = require("express");
const router = express.Router();
const AdvancedOptionsRouter = require("../../../../Model/Products/Catalog/Advanced/OptionsTables"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  AdvancedOptionsRouter({  
        Product_id : req.body.Product_id,
        Name : req.body.Name,
        Type : req.body.Type,
        Required : req.body.Required,
        Label : req.body.Label,
        Price : req.body.Price,
        PriceType : req.body.PriceType 
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new AdvancedOptionsRouter.updateMany({Product_id:req.body.Product_id}, { $set :{
        Name : req.body.Name,
        Type : req.body.Type,
        Required : req.body.Required,
        Label : req.body.Label,
        Price : req.body.Price,
        PriceType : req.body.PriceType 
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await AdvancedOptionsRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await AdvancedOptionsRouter.findOneAndDelete({Product_id :req.body.Product_id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;