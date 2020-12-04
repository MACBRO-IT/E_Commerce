const express = require("express");
const router = express.Router();
const FlashSaleVerticalProductsRouter = require("../../../../Model/Appearance/StoreFront/HomePageSection/FlashSale & VerticalProductsTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  FlashSaleVerticalProductsRouter({   
        Vertical_Id : req.body.Vertical_Id,
        SectionStatus : req.body.SectionStatus,
        FlashTitle : req.body.FlashTitle,
        ActiveCampaign : req.body.ActiveCampaign,
        Title1 : req.body.Title1, 
        Type1 : req.body.Type1,  
        Category1 :req.body.Category1,
        Title2 : req.body.Title2, 
        Type2 : req.body.Type2,  
        Category2 :req.body.Category2,
        Title3 : req.body.Title3, 
        Type3 : req.body.Type3,  
        Category3 :req.body.Category3,
        Title4 : req.body.Title4, 
        Type4 : req.body.Type4,  
        Category4 :req.body.Category4,
        Title5 : req.body.Title5, 
        Type5 : req.body.Type5,  
        Category5 :req.body.Category5,
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new FlashSaleVerticalProductsRouter.updateMany({
    Vertical_Id : req.body.Vertical_Id}, { $set :{
        SectionStatus : req.body.SectionStatus,
        FlashTitle : req.body.FlashTitle,
        ActiveCampaign : req.body.ActiveCampaign,
        Title1 : req.body.Title1, 
        Type1 : req.body.Type1,  
        Category1 :req.body.Category1,
        Title2 : req.body.Title2, 
        Type2 : req.body.Type2,  
        Category2 :req.body.Category2,
        Title3 : req.body.Title3, 
        Type3 : req.body.Type3,  
        Category3 :req.body.Category3,
        Title4 : req.body.Title4, 
        Type4 : req.body.Type4,  
        Category4 :req.body.Category4,
        Title5 : req.body.Title5, 
        Type5 : req.body.Type5,  
        Category5 :req.body.Category5,
        
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await FlashSaleVerticalProductsRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await FlashSaleVerticalProductsRouter.findOneAndDelete({
        Featured_Id : req.body.Featured_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;