const express = require("express");
const router = express.Router();
const AttributeSetRouter = require("../../../Model/Products/AttributeSet/GeneralTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  AttributeSetRouter({  
        AttributeSet_Id : req.body.AttributeSet_Id,
        Name : req.body.Name,  
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new AttributeSetRouter.updateMany({
    AttributeSet_Id : req.body.AttributeSet_Id,}, { $set :{
        Name : req.body.Name, 
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await AttributeSetRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await AttributeSetRouter.findOneAndDelete({AttributeSet_Id : req.body.AttributeSet_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;