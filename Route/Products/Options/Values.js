const express = require("express");
const router = express.Router();
const OptionsValuesRouter = require("../../../Model/Products/Options/ValuesTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  OptionsValuesRouter({  
        
        OptionsValue_Id : req.body.OptionsValue_Id,
        Price : req.body.Price,
        PriceType : req.body.PriceType, 
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new OptionsValuesRouter.updateMany({OptionsValue_Id : req.body.OptionsValue_Id}, { $set :{
   
    Price : req.body.Price,
    PriceType : req.body.PriceType, 
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await OptionsValuesRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await OptionsValuesRouter.findOneAndDelete({OptionsValue_Id : req.body.OptionsValue_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;