const express = require("express");
const router = express.Router();
const SliderBannerRouter = require("../../../../Model/Appearance/StoreFront/HomePageSection/SliderBannersTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  SliderBannerRouter({   
        Slider_Id : req.body.Slider_Id,
        CalltoActionURL : req.body.CalltoActionURL,
        window : req.body.window,  
  
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new SliderBannerRouter.updateMany({
    Slider_Id : req.body.Slider_Id}, { $set :{
        CalltoActionURL : req.body.CalltoActionURL,
        window : req.body.window, 
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await SliderBannerRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await SliderBannerRouter.findOneAndDelete({
        Slider_Id : req.body.Slider_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;