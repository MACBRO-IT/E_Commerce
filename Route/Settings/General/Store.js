const express = require("express");
const router = express.Router();
const SettingStoreRouter = require("../../../Model/Settings/General/StoreTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  SettingStoreRouter({   
        Store_Id : req.body.Store_Id,
        Name : req.body.Name, 
        Tagline : req.body.Tagline,
        Phone : req.body.Phone,
        Email : req.body.Email,
        Address1 : req.body.Address1,
        Address2 : req.body.Address2,
        City : req.body.City,
        Country : req.body.Country,
        State : req.body.State,
        Zip : req.body.Zip,
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new SettingStoreRouter.updateMany({
    Store_Id : req.body.Store_Id}, { $set :{
        Name : req.body.Name, 
        Tagline : req.body.Tagline,
        Phone : req.body.Phone,
        Email : req.body.Email,
        Address1 : req.body.Address1,
        Address2 : req.body.Address2,
        City : req.body.City,
        Country : req.body.Country,
        State : req.body.State,
        Zip : req.body.Zip,
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await SettingStoreRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await SettingStoreRouter.findOneAndDelete({
        Store_Id : req.body.Store_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;