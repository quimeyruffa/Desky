const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');


//Register

router.post("/register", async(req,res)=>{
    try{
        //generate password(usebcrypt you dumb dumb no custom hash)
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt)

        //crate user
        const newUser = new User({
            username:req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        //save and send
        const user = await newUser.save();
        res.status(200).json(user._id);
    }catch(err){
        res.status(500).json(err)
    }
});

//Login

router.post("/login", async (req,res)=>{
    try{
        //find user
        const user = await User.findOne({username:req.body.username})
        !user && res.status(400).json("Usuario o contrasena incorrecta!");

        //validate password
        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        !validPassword && res.status(400).json("Usuario o contrasena incorrecta!");

        //send response
        res.status(200).json({_id:user._id,username:username})
    }catch(err){
        res.status(500).json(err)
    }
});


module.exports = router;