const express = require("express");
const router = express.Router();
const SettingRouter = require("../../../Model/Settings/General/GeneralTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  SettingRouter({   
        General_Id : req.body.General_Id,
        SupportedCountries : req.body.SupportedCountries,
        DefaultCountry : req.body.DefaultCountry, 
        SupportedLocales : req.body.SupportedLocales, 
        DefaultLocale : req.body.DefaultLocale, 
        DefaultTimezone : req.body.DefaultTimezone,
        CustomerRole : req.body.CustomerRole,
        ReviewsRatings : req.body.ReviewsRatings,
        AutoApproveReviews : req.body.AutoApproveReviews,
        WelcomeEmail : req.body.WelcomeEmail,
        AdminOrderEmail : req.body.AdminOrderEmail,
        OrderStatusEmail : req.body.OrderStatusEmail,
        InvoiceEmail : req.body.InvoiceEmail,
        CookieBar : req.body.CookieBar,
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new SettingRouter.updateMany({
    General_Id : req.body.General_Id}, { $set :{
        SupportedCountries : req.body.SupportedCountries,
        DefaultCountry : req.body.DefaultCountry, 
        SupportedLocales : req.body.SupportedLocales, 
        DefaultLocale : req.body.DefaultLocale, 
        DefaultTimezone : req.body.DefaultTimezone,
        CustomerRole : req.body.CustomerRole,
        ReviewsRatings : req.body.ReviewsRatings,
        AutoApproveReviews : req.body.AutoApproveReviews,
        WelcomeEmail : req.body.WelcomeEmail,
        AdminOrderEmail : req.body.AdminOrderEmail,
        OrderStatusEmail : req.body.OrderStatusEmail,
        InvoiceEmail : req.body.InvoiceEmail,
        CookieBar : req.body.CookieBar,  
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await SettingRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await SettingRouter.findOneAndDelete({
        General_Id : req.body.General_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;