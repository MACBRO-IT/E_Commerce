const express = require("express");
const router = express.Router();
const CashOnDeliveryRouter = require("../../../Model/Settings/Payment/CashOnDeliveryTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  CashOnDeliveryRouter({   
        Cash_Id : req.body.Cash_Id,
        Status : req.body.Status, 
        Label : req.body.Label,
        Description : req.body.Description, 
         
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new CashOnDeliveryRouter.updateMany({
    Cash_Id : req.body.Cash_Id}, { $set :{
        Status : req.body.Status, 
        Label : req.body.Label,
        Description : req.body.Description, 
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await CashOnDeliveryRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await CashOnDeliveryRouter.findOneAndDelete({
        Cash_Id : req.body.Cash_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;