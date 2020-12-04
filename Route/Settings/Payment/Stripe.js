const express = require("express");
const router = express.Router();
const StripeRouter = require("../../../Model/Settings/Payment/StripeTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  StripeRouter({   
        Stripe_Id : req.body.Stripe_Id,
        Status : req.body.Status, 
        Label : req.body.Label,
        Description : req.body.Description, 
        PublishKey : req.body.PublishKey,
        SecretKey : req.body.SecretKey, 
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new StripeRouter.updateMany({
    Stripe_Id : req.body.Stripe_Id}, { $set :{
        Status : req.body.Status, 
        Label : req.body.Label,
        Description : req.body.Description, 
        PublishKey : req.body.PublishKey,
        SecretKey : req.body.SecretKey, 

  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await StripeRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await StripeRouter.findOneAndDelete({
        Stripe_Id : req.body.Stripe_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;