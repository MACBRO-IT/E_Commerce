const express = require("express");
const router = express.Router();
const BankTransferRouter = require("../../../Model/Settings/Payment/BankTransferTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  BankTransferRouter({   
        Bank_Id : req.body.Bank_Id,
        Status : req.body.Status, 
        Label : req.body.Label,
        Description : req.body.Description,
        Instructions : req.body.Instructions,
         
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new BankTransferRouter.updateMany({
    Bank_Id : req.body.Bank_Id}, { $set :{
        Status : req.body.Status, 
        Label : req.body.Label,
        Description : req.body.Description,
        Instructions : req.body.Instructions,
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await BankTransferRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await BankTransferRouter.findOneAndDelete({
        Bank_Id : req.body.Bank_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;