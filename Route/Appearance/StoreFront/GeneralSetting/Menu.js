const express = require("express");
const router = express.Router();
const StoreFrontMenuRouter = require("../../../../Model/Appearance/StoreFront/GeneralSetting/MenusTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  StoreFrontMenuRouter({   
        Menu_Id : req.body.Menu_Id,
        NavbarText : req.body.NavbarText,
        PrimaryMenu : req.body.PrimaryMenu, 
        CategoryMenu : req.body.CategoryMenu,  
        FooterMenuOneTitle : req.body.FooterMenuOneTitle,
        FooterMenuOne : req.body.FooterMenuOne,
        FooterMenuTwoTitle : req.body.FooterMenuTwoTitle,
        FooterMenuTwo : req.body.FooterMenuTwo,
        
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new StoreFrontMenuRouter.updateMany({
    Menu_Id : req.body.Menu_Id}, { $set :{
        NavbarText : req.body.NavbarText,
        PrimaryMenu : req.body.PrimaryMenu, 
        CategoryMenu : req.body.CategoryMenu,  
        FooterMenuOneTitle : req.body.FooterMenuOneTitle,
        FooterMenuOne : req.body.FooterMenuOne,
        FooterMenuTwoTitle : req.body.FooterMenuTwoTitle,
        FooterMenuTwo : req.body.FooterMenuTwo, 
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await StoreFrontMenuRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await StoreFrontMenuRouter.findOneAndDelete({
        Menu_Id : req.body.Menu_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;