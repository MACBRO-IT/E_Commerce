const express = require("express");
const router = express.Router();
const AttributeValuesRouter = require("../../../Model/Products/Attributes/ValuesTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  AttributeValuesRouter({  
        Attribute_set : req.body.Attribute_set,
        Attribute_Id : req.body.Attribute_Id,
        Value : req.body.Value,  
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new AttributeValuesRouter.updateMany({ 
    Attribute_Id : req.body.Attribute_Id}, { $set :{
    Attribute_set : req.body.Attribute_set,
    Value : req.body.Value,
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await AttributeValuesRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await AttributeValuesRouter.findOneAndDelete({ 
      Attribute_Id : req.body.Attribute_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;