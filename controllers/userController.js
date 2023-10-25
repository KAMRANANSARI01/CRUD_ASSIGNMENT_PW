const User = require("../models/db.schema.js")
exports.getData=async(req,res)=>{
  try {
    const {name,email,password} = req.body;
    const userInfo = await User.find({email})
    res.send(200).json({
        success:true,
            message : "User Info fetched Successfully",
            userInfo
    })

  } catch (error) {
    console.log(error)
        res.status(400).json({
            success:false,
            message : error.message
        })
  }
}

// for register 
exports.userRegister = async(req,res)=>{
    try {
        const {name,email,password} = req.body;
        const user = await User.create({
            name,
            email,
            password
        })
        res.status(200).json({
            success:true,
            message : "User Registered Successfully",
            user
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success:false,
            message : error.message
        })
    }
}

//for login 
exports.userLogin = async(req,res)=>{
    try {
        const {email,password} = req.body
        const userData = await User.findOne({email})

        //adding some validation
      if (userData){
         if(userData.password == password){
            res.status(200).send({msg:"user logged in successfully"})
         }else{
            res.status(400).send({msg:"Password is incorrect."})
         }
      }else{
        res.status(404).send({msg:"No user found related to this data"})
      }
         
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success:false,
            message : error.message
        })
    }
}