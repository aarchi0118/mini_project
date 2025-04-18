
import { user} from '../models/User.js';



export async function registerUser(req,res){
    const {name,email,password} = req.body;
    try{
        const newUser = new user({name,email,password})
        await newUser.save()
        res.status(201).json({message:'done'})
    }
    catch(err)
    {
        res.status(500).json({message:'error'})
    }
}


export async function loginUser(req,res){
    const {email,password} = req.body;
    try{
        const user = await findOne({email,password});
        if(!user)
        {
            return res.status(401).json({mesage:"Invalid"});
        }
        res.status(200).json({message:"yayy!login"})
    }
    catch(err)
    {
        res.status(500).json({message:'error logging in'});
    }
}