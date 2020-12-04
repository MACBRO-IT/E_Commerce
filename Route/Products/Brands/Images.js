const express = require("express");
const router = express.Router();
const CategoryRouter = require("../../../Model/Products/Categories/GeneralTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  CategoryRouter({  
        Category_Id : req.body.Category_Id,
        Name : req.body.Name,
        Searchable : req.body.Searchable,
        Status : req.body.Status  
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new CategoryRouter.updateMany({Category_Id:req.body.Category_Id}, { $set :{
    Name : req.body.Name,
    Searchable : req.body.Searchable,
    Status : req.body.Status  
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await CategoryRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await CategoryRouter.findOneAndDelete({Category_Id :req.body.Category_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;