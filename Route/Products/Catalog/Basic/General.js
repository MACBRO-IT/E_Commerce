const express = require("express");
const router = express.Router();
const BasicGeneralRouter = require("../../../../Model/Products/Catalog/Basic/GeneralTable"); 

//Add 
router.post("/",async(req,res) => {  
  console.log("hi backend")
       var data= await new  BasicGeneralRouter({  
        Product_id : req.body.Product_id,
        Name : req.body.Name,
        Description : req.body.Description,
        Brand : req.body.Brand,
        Categories : req.body.Categories,
        TaxClass : req.body.TaxClass,
        Tags : req.body.Tags,
        Status :  req.body.Status  
    });
    await data.save();
    res.json(data);  
}) 

router.get("/lastRecode",async(req,res)=>{  

  var  data = await BasicGeneralRouter.find({}).sort({_id: -1}).limit(1)
res.json(data);
console.log(data)
})


//Update
router.post("/Update", async(req,res) => {  
  var update = await new BasicGeneralRouter.updateMany({Product_id:req.body.Product_id}, { $set :{
    Name : req.body.Name,
    Description : req.body.Description,
    Brand : req.body.Brand,
    Categories : req.body.Categories,
    TaxClass : req.body.TaxClass,
    Tags : req.body.Tags,
    Status :  req.body.Status  
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await BasicGeneralRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await BasicGeneralRouter.findOneAndDelete({Product_id :req.body.Product_id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;