const express = require("express");
const router = express.Router();
const CouponsUsageLimitsRouter = require("../../../Model/Sales/Coupons/UsageLimitsTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  CouponsUsageLimitsRouter({   
        UsageLimit_Id : req.body.UsageLimit_Id,
        UsageLimitPerCoupon : req.body.UsageLimitPerCoupon,
        UsageLimitPerCustomer : req.body.UsageLimitPerCustomer,
         
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new CouponsUsageLimitsRouter.updateMany({
    UsageLimit_Id : req.body.UsageLimit_Id}, { $set :{
     
        UsageLimitPerCoupon : req.body.UsageLimitPerCoupon,
        UsageLimitPerCustomer : req.body.UsageLimitPerCustomer,
        
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await CouponsUsageLimitsRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await CouponsUsageLimitsRouter.findOneAndDelete({
        UsageLimit_Id : req.body.UsageLimit_Id,}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;