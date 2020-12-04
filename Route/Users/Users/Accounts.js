const express = require("express");
const router = express.Router();
const UsersAccountRouter = require("../../../Model/Users/Users/AccountsTable"); 

//Add 
router.post("/",async(req,res) => {  
       var data= await new  UsersAccountRouter({   
        Account_Id : req.body.Account_Id,
        FirstName : req.body.FirstName,
        LastName : req.body.LastName, 
        Email : req.body.Email,
        Roles : req.body.Roles,
        Password : req.body.Password,
        ConfirmPassword : req.body.ConfirmPassword
    });
    await data.save();
    res.json(data);  
}) 

//Update
router.post("/Update", async(req,res) => {  
  var update = await new UsersAccountRouter.updateMany({
    Account_Id : req.body.Account_Id}, { $set :{
        FirstName : req.body.FirstName,
        LastName : req.body.LastName, 
        Email : req.body.Email,
        Roles : req.body.Roles,
        Password : req.body.Password,
        ConfirmPassword : req.body.ConfirmPassword
  }});
  res.json(update);
})

//GET
router.get("/",async(req,res)=>{ 
      var  data = await UsersAccountRouter.find(); 
      res.json(data);
}) 
 

//Delete
router.post("/del", async(req,res)=>{  
    var deleteData  = await UsersAccountRouter.findOneAndDelete({
        Account_Id : req.body.Account_Id}).then(e => {
        res.json({message : "Deleted Successfully"});
    })
})

 
module.exports = router;