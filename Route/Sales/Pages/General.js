const express = require("express");
const router = express.Router();
const PagesRouter = require("../../../Model/Sales/Pages/GeneralTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  PagesRouter({   
        Pages_Id : req.body.Pages_Id,
        Name : req.body.Name,
        Body : req.body.Body,
        Status : req.body.Status
         
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new PagesRouter.updateMany({
    Pages_Id : req.body.Pages_Id}, { $set :{
     
        Name : req.body.Name,
        Body : req.body.Body,
        Status : req.body.Status
        
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await PagesRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await PagesRouter.findOneAndDelete({
        Pages_Id : req.body.Pages_Id,}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;