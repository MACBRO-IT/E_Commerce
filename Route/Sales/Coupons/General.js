const express = require("express");
const router = express.Router();
const CouponsRouter = require("../../../Model/Sales/Coupons/GeneralTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  CouponsRouter({   
        Coupon_Id : req.body.Coupon_Id,
        Name : req.body.Name,
        Code : req.body.Code,
        DiscountType : req.body.DiscountType,
        Value : req.body.Value,
        FreeShipping : req.body.FreeShipping,
        Startdate : req.body.Startdate,
        Enddate : req.body.Enddate,
        Status : req.body.Status,
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new CouponsRouter.updateMany({Coupon_Id : req.body.Coupon_Id}, { $set :{
     
        Name : req.body.Name,
        Code : req.body.Code,
        DiscountType : req.body.DiscountType ,
        Value : req.body.Value,
        FreeShipping : req.body.FreeShipping,
        Startdate : req.body.Startdate,
        Enddate : req.body.Enddate,
        Status : req.body.Status,
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await CouponsRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await CouponsRouter.findOneAndDelete({Coupon_Id : req.body.Coupon_Id,}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;