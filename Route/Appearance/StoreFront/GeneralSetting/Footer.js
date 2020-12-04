const express = require("express");
const router = express.Router();
const StoreFrontFooterRouter = require("../../../../Model/Appearance/StoreFront/GeneralSetting/FooterTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  StoreFrontFooterRouter({   
        Footer_Id : req.body.Footer_Id,
        FooterTags : req.body.FooterTags,
        FooterCopyrightText : req.body.FooterCopyrightText, 
        PaymentMethodsImage : req.body.PaymentMethodsImage,  
        
        
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new StoreFrontFooterRouter.updateMany({
    Footer_Id : req.body.Footer_Id}, { $set :{
        FooterTags : req.body.FooterTags,
        FooterCopyrightText : req.body.FooterCopyrightText, 
        PaymentMethodsImage : req.body.PaymentMethodsImage,  
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await StoreFrontFooterRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await StoreFrontFooterRouter.findOneAndDelete({
        Footer_Id : req.body.Footer_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;