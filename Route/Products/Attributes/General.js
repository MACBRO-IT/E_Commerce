const express = require("express");
const router = express.Router();
const AttributeRouter = require("../../../Model/Products/Attributes/GeneralTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  AttributeRouter({  
        AttributeSet : req.body.AttributeSet,
        Attribute_Id : req.body.Attribute_Id,
        Name : req.body.Name,
        Categories : req.body.Categories,
        Filterable : req.body.Filterable  
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new AttributeRouter.updateMany({Attribute_Id : req.body.Attribute_Id,}, { $set :{
    Attribute_set : req.body.Attribute_set,
        Name : req.body.Name,
        Categories : req.body.Categories,
        Filterable : req.body.Filterable 
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await AttributeRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await AttributeRouter.findOneAndDelete({Attribute_Id : req.body.Attribute_Id,}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;