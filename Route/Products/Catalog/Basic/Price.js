const express = require("express");
const router = express.Router();
const BasicPriceRouter = require("../../../../Model/Products/Catalog/Basic/PriceTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data = await new  BasicPriceRouter({  
        Product_id : req.body.Product_id,
        Price:req.body.Price,
        SpecialPrice : req.body.SpecialPrice,
        SpecialPriceType : req.body.SpecialPriceType,
        SpecialPriceStart : req.body.SpecialPriceStart,
        SpecialPriceEnd : req.body.SpecialPriceEnd 
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new BasicPriceRouter.updateMany({Product_id:req.body.Product_id}, { $set :{ 
    Price:req.body.Price,
    SpecialPrice : req.body.SpecialPrice,
    SpecialPriceType : req.body.SpecialPriceType,
    SpecialPriceStart : req.body.SpecialPriceStart,
    SpecialPriceEnd : req.body.SpecialPriceEnd,
   
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await BasicPriceRouter.find(); 
      res.json(data);
})  

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await BasicPriceRouter.findOneAndDelete({Product_id :req.body.Product_id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})
 
module.exports = router;