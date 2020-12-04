const express = require("express");
const router = express.Router();
const RolesRouter = require("../../../Model/Users/Roles/GeneralTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  RolesRouter({   
        Roles_Id : req.body.Roles_Id,
        Name : req.body.Name,
        
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new RolesRouter.updateMany({
    Roles_Id : req.body.Roles_Id}, { $set :{
        Name : req.body.Name,
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await RolesRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await RolesRouter.findOneAndDelete({
        Roles_Id : req.body.Roles_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;