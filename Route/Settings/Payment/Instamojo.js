const express = require("express");
const router = express.Router();
const InstamojoRouter = require("../../../Model/Settings/Payment/InstamojoTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  InstamojoRouter({   
        Instamoj_Id : req.body.Instamoj_Id,
        Status : req.body.Status, 
        Label : req.body.Label,
        Description : req.body.Description, 
        Sandbox : req.body.Sandbox,
        APIKey : req.body.APIKey,
        AuthToken : req.body.AuthToken,
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new InstamojoRouter.updateMany({
    Instamoj_Id : req.body.Instamoj_Id}, { $set :{
        Status : req.body.Status, 
        Label : req.body.Label,
        Description : req.body.Description, 
        Sandbox : req.body.Sandbox,
        APIKey : req.body.APIKey,
        AuthToken : req.body.AuthToken,

  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await InstamojoRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await InstamojoRouter.findOneAndDelete({
        Instamoj_Id : req.body.Instamoj_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;