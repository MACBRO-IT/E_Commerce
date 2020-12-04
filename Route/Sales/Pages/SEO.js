const express = require("express");
const router = express.Router();
const PagesSEORouter = require("../../../Model/Sales/Pages/SEOTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  PagesSEORouter({   
        SEO_Id : req.body.SEO_Id,
        MetaTitle : req.body.MetaTitle,
        MetaDescription : req.body.MetaDescription, 
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new PagesSEORouter.updateMany({
    SEO_Id : req.body.SEO_Id}, { $set :{
        MetaTitle : req.body.MetaTitle,
        MetaDescription : req.body.MetaDescription, 
        
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await PagesSEORouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await PagesSEORouter.findOneAndDelete({
        SEO_Id : req.body.SEO_Id,}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;