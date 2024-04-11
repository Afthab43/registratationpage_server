const userCollection = require('../model/user.model');


let signUp=async(req,res)=>{
    try {
        let {firstNmae,lastName,phoneNumber,email,password}=req.body;
        let signUphere=await userCollection.create({firstNmae,lastName,phoneNumber,email,password})
        console.log('hello')
        return res.status(201).json({error:false,message:`user added successfully`,signUphere})
    } catch (error) {
        console.error(error);
        return res.status(500).json({error:false,message:error.message})
    }
}

let logIn=async(req,res)=>{
    try {
        let{email,password}=req.body;
        let userAvailable=await userCollection.findOne({email})

        if(userAvailable)
        {
            if(userAvailable.password===password)
            {
                return res.status(201).json({error:false,message:`user loggedin successfully`,userAvailable})
            }
            else
            {
                return res.status(201).json({error:false,message:`passowrd is incorrect`})
            }
        }
        else
        {
            return res.status(201).json({error:true,message:`user is not available`})
        }
        
    } catch (error) {
        return res.status(400).json({error:false,message:error.message})
        
    }
}

module.exports={signUp,logIn}