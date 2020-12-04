const express = require("express");
const router = express.Router();
const OptionsRouter = require("../../../Model/Products/Options/GeneralTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  OptionsRouter({  
        
        Options_Id : req.body.Options_Id,
        Name : req.body.Name,
        Type : req.body.Type,
        Required : req.body.Required  
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new OptionsRouter.updateMany({Options_Id : req.body.Options_Id}, { $set :{
   
    Name : req.body.Name,
    Type : req.body.Type,
    Required : req.body.Required 
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await OptionsRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await OptionsRouter.findOneAndDelete({Options_Id : req.body.Options_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;