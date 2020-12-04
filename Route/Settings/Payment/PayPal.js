const express = require("express");
const router = express.Router();
const PayPalRouter = require("../../../Model/Settings/Payment/PayPalTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  PayPalRouter({   
        PayPal_Id : req.body.PayPal_Id,
        Status : req.body.Status, 
        Label : req.body.Label,
        Description : req.body.Description, 
        Sandbox : req.body.Sandbox,
        ClientID : req.body.ClientID,
        Secret : req.body.Secret,
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new PayPalRouter.updateMany({
    PayPal_Id : req.body.PayPal_Id}, { $set :{
        Status : req.body.Status, 
        Label : req.body.Label,
        Description : req.body.Description, 
        Sandbox : req.body.Sandbox,
        ClientID : req.body.ClientID,
        Secret : req.body.Secret,

  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await PayPalRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await PayPalRouter.findOneAndDelete({
        PayPal_Id : req.body.PayPal_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;