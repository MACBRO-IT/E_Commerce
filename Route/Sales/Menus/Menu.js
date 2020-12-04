const express = require("express");
const router = express.Router();
const MenuRouter = require("../../../Model/Sales/Menus/MenuTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  MenuRouter({   
        Menu_Id : req.body.Menu_Id,
        Name : req.body.Name,
        Status : req.body.Status, 
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new MenuRouter.updateMany({
    Menu_Id : req.body.Menu_Id}, { $set :{
        Name : req.body.Name,
        Status : req.body.Status, 
        
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await MenuRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await MenuRouter.findOneAndDelete({
        Menu_Id : req.body.Menu_Id,}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;