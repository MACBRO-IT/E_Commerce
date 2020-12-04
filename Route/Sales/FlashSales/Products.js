const express = require("express");
const router = express.Router();
const FlashSalesProductsRouter = require("../../../Model/Sales/FlashSales/ProductsTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  FlashSalesProductsRouter({   
        FlashSale_Id : req.body.FlashSale_Id,
        Product : req.body.Product,
        EndDate : req.body.EndDate,
        Price : req.body.Price,
        Quantity : req.body.Quantity,
        
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new FlashSalesProductsRouter.updateMany({
    FlashSale_Id : req.body.FlashSale_Id,}, { $set :{
     
        Name : req.body.Name,
         
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await FlashSalesProductsRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await FlashSalesProductsRouter.findOneAndDelete({
        FlashSale_Id : req.body.FlashSale_Id,}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;