const express = require("express");
const router = express.Router();
const CouponsUsageRestrictionsRouter = require("../../../Model/Sales/Coupons/UsageRestrictionsTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  CouponsUsageRestrictionsRouter({   
        UsageRestrictions_Id : req.body.UsageRestrictions_Id,
        MinimumSpend : req.body.MinimumSpend,
        MaximumSpend : req.body.MaximumSpend,
        Products : req.body.Products,
        ExcludeProducts : req.body.ExcludeProducts,
        Categories : req.body.Categories,
        ExcludeCategories : req.body.ExcludeCategories,
         
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new CouponsUsageRestrictionsRouter.updateMany({
    UsageRestrictions_Id : req.body.UsageRestrictions_Id}, { $set :{
        MinimumSpend : req.body.MinimumSpend,
        MaximumSpend : req.body.MaximumSpend,
        Products : req.body.Products,
        ExcludeProducts : req.body.ExcludeProducts,
        Categories : req.body.Categories,
        ExcludeCategories : req.body.ExcludeCategories,
        
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await CouponsUsageRestrictionsRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await CouponsUsageRestrictionsRouter.findOneAndDelete({
        UsageRestrictions_Id : req.body.UsageRestrictions_Id,}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;