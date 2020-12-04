const express = require("express");
const router = express.Router();
const SettingNewsletterRouter = require("../../../Model/Settings/General/NewsletterTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  SettingNewsletterRouter({   
        Newsletter_Id : req.body.Newsletter_Id,
        Newsletter : req.body.Newsletter, 
        MailchimpAPIKey : req.body.MailchimpAPIKey,
        MailchimpListID : req.body.MailchimpListID,
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new SettingNewsletterRouter.updateMany({
    Newsletter_Id : req.body.Newsletter_Id}, { $set :{
        Newsletter : req.body.Newsletter, 
        MailchimpAPIKey : req.body.MailchimpAPIKey,
        MailchimpListID : req.body.MailchimpListID,
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await SettingNewsletterRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await SettingNewsletterRouter.findOneAndDelete({
        Newsletter_Id : req.body.Newsletter_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;