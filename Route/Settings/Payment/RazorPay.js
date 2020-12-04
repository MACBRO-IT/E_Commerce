const express = require("express");
const router = express.Router();
const RazorpayRouter = require("../../../Model/Settings/Payment/RazorpayTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  RazorpayRouter({   
        Razor_Id : req.body.Razor_Id,
        Status : req.body.Status, 
        Label : req.body.Label,
        Description : req.body.Description, 
        KeyId : req.body.KeyId,
        KeySecret : req.body.KeySecret, 
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new RazorpayRouter.updateMany({
    Razor_Id : req.body.Razor_Id}, { $set :{
        Status : req.body.Status, 
        Label : req.body.Label,
        Description : req.body.Description, 
        KeyId : req.body.KeyId,
        KeySecret : req.body.KeySecret, 

  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await RazorpayRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await RazorpayRouter.findOneAndDelete({
        Razor_Id : req.body.Razor_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;