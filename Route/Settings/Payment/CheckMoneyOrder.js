const express = require("express");
const router = express.Router();
const CheckMoneyOrderRouter = require("../../../Model/Settings/Payment/CheckMoneyOrderTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  CheckMoneyOrderRouter({   
        Money_Id : req.body.Money_Id,
        Status : req.body.Status, 
        Label : req.body.Label,
        Description : req.body.Description, 
        Instructions : req.body.Instructions
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new CheckMoneyOrderRouter.updateMany({
    Money_Id : req.body.Money_Id}, { $set :{
        Status : req.body.Status, 
        Label : req.body.Label,
        Description : req.body.Description, 
        Instructions : req.body.Instructions

  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await CheckMoneyOrderRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await CheckMoneyOrderRouter.findOneAndDelete({
        Money_Id : req.body.Money_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;