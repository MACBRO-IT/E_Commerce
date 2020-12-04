const express = require("express");
const router = express.Router();
const BrandRouter = require("../../../Model/Products/Brands/GeneralTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  BrandRouter({  
        Brand_Id : req.body.Brand_Id,
        Name : req.body.Name, 
        Status : req.body.Status  
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new BrandRouter.updateMany({Brand_Id:req.body.Brand_Id}, { $set :{
    Name : req.body.Name, 
    Status : req.body.Status  
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await BrandRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await BrandRouter.findOneAndDelete({Brand_Id :req.body.Brand_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;