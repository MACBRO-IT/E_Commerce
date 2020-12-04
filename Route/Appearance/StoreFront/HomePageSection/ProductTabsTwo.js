const express = require("express");
const router = express.Router();
const ProductTabsTwoRouter = require("../../../../Model/Appearance/StoreFront/HomePageSection/ProductTabsTwoTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  ProductTabsTwoRouter({   
        TabTwo_Id : req.body.TabTwo_Id,
        SectionStatus : req.body.SectionStatus,
        Title : req.body.Title,
        Title1 : req.body.Title1, 
        Type1 : req.body.Type1,  
        ProductsLimit1 :req.body.ProductsLimit1,
        Title2 : req.body.Title2, 
        Type2 : req.body.Type2,  
        ProductsLimit2 :req.body.ProductsLimit2,
        Title3 : req.body.Title3, 
        Type3 : req.body.Type3,  
        Category3 :req.body.Category3,
        Title4 : req.body.Title4, 
        Type4 : req.body.Type4,  
        Category4 :req.body.Category4,
        
  
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new ProductTabsTwoRouter.updateMany({
    TabTwo_Id : req.body.TabTwo_Id}, { $set :{
        SectionStatus : req.body.SectionStatus,
        Title : req.body.Title,
        Title1 : req.body.Title1, 
        Type1 : req.body.Type1,  
        ProductsLimit1 :req.body.ProductsLimit1,
        Title2 : req.body.Title2, 
        Type2 : req.body.Type2,  
        ProductsLimit2 :req.body.ProductsLimit2,
        Title3 : req.body.Title3, 
        Type3 : req.body.Type3,  
        Category3 :req.body.Category3,
        Title4 : req.body.Title4, 
        Type4 : req.body.Type4,  
        Category4 :req.body.Category4, 
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await ProductTabsTwoRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await ProductTabsTwoRouter.findOneAndDelete({
        TabTwo_Id : req.body.TabTwo_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;