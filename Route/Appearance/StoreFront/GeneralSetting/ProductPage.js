const express = require("express");
const router = express.Router();
const StoreFrontProductRouter = require("../../../../Model/Appearance/StoreFront/GeneralSetting/ProductPageTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  StoreFrontProductRouter({   
        ProductPage_Id : req.body.ProductPage_Id,
        CalltoActionURL : req.body.CalltoActionURL, 
        Window : req.body.Window,
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new StoreFrontProductRouter.updateMany({
    ProductPage_Id : req.body.ProductPage_Id}, { $set :{
        BackgroundImage : req.body.BackgroundImage,
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await StoreFrontProductRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await StoreFrontProductRouter.findOneAndDelete({
        ProductPage_Id : req.body.ProductPage_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;