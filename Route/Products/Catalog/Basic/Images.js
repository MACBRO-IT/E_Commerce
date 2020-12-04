const express = require("express");
const router = express.Router();
const BasicInventoryRouter = require("../../../../Model/Products/Catalog/Basic/InventoryTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data = await new  BasicInventoryRouter({  
        Product_id : req.body.Product_id,
        SKU:req.body.SKU,
        InventoryManagement : req.body.InventoryManagement,
        StockAvailability : req.body.StockAvailability 
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new BasicInventoryRouter.updateMany({Product_id:req.body.Product_id}, { $set :{ 
      SKU:req.body.SKU,
      InventoryManagement : req.body.InventoryManagement,
      StockAvailability : req.body.StockAvailability    
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await BasicInventoryRouter.find(); 
      res.json(data);
})  

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await BasicInventoryRouter.findOneAndDelete({Product_id :req.body.Product_id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})
 
module.exports = router;