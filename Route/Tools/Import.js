const express = require("express");
const router = express.Router();
const ImportRouter = require("../../Model/Tools/ImportTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  ImportRouter({   
        Import_Id : req.body.Import_Id,
        CSVFile : req.body.CSVFile,
        ImportType : req.body.ImportType,  
  
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new ImportRouter.updateMany({
    Import_Id : req.body.Import_Id}, { $set :{
        CSVFile : req.body.CSVFile,
        TopBrands : req.body.TopBrands, 
        CalltoActionURL : req.body.CalltoActionURL,  
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await ImportRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await ImportRouter.findOneAndDelete({
        Import_Id : req.body.Import_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;