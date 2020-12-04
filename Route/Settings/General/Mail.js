const express = require("express");
const router = express.Router();
const SettingMailRouter = require("../../../Model/Settings/General/MailTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  SettingMailRouter({   
        Mail_Id : req.body.Mail_Id,
        FromAddress : req.body.FromAddress,
        FromName : req.body.FromName, 
        Host : req.body.Host, 
        Port : req.body.Port, 
        Username : req.body.Username,
        Password : req.body.Password,
        Encryption : req.body.Encryption,
         
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new SettingMailRouter.updateMany({
    Mail_Id : req.body.Mail_Id}, { $set :{
        FromAddress : req.body.FromAddress,
        FromName : req.body.FromName, 
        Host : req.body.Host, 
        Port : req.body.Port, 
        Username : req.body.Username,
        Password : req.body.Password,
        Encryption : req.body.Encryption,
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await SettingMailRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await SettingMailRouter.findOneAndDelete({
        Mail_Id : req.body.Mail_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;