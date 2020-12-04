const express = require("express");
const router = express.Router();
const TagRouter = require("../../../Model/Products/Tag/GeneralTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  TagRouter({   
        Tag_Id : req.body.Tag_Id,
        Name : req.body.Name,
        
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new TagRouter.updateMany({Tag_Id : req.body.Tag_Id,}, { $set :{
     
        Name : req.body.Name,
         
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await TagRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await TagRouter.findOneAndDelete({Tag_Id : req.body.Tag_Id,}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;