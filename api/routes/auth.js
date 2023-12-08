const router = require("express").Router();
const User = require("../models/User");


//REGISTER
router.post("/register",(req,res)=>{
    const newUser = new User({
        username:req.body.username,
        email:req.body.username,
        password:req.body.username,
    })


    const user = newUser.save();
    res.json(user)
})

module.exports=router;