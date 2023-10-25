const registerValidation = (req,res,next)=>{
    const {email,name,password} = req.body;
    if(req.body && name && email &&password){
        next()
    }else{
        res.status(404).send({msg:"all input fields are required"})
    }
}