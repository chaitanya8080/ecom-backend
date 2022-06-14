


const User = require("../models/userModel")
const jwt = require('jsonwebtoken');
require('dotenv').config()

const generateToken = (user) => {
    return jwt.sign({user}, process.env.SECRET_KEY)
}

const register = async (req, res) => {
    try{
        let user = await User.findOne({email : req.body.email})

        //checking email of the user if its already there
        if(user){
            return res.status(400).send({message : "Email already exists" })
        }
        //create new user registeration ;
        user = await User.create(req.body);
        const token = generateToken(user)
        return res.status(200).send({user, token});
    }
    catch(err){
        res.status(400).send({message : err.message})
    }
}
const login = async (req, res) => {
    try{
        
        const user = await User.findOne({email : req.body.email})
        //checked if mail exists
        if(!user){
            return res.status(400).send("Wrong Email or Password") // both should give
        }
        //if email exists, check password;
        const pass = user.checkPassword(req.body.password)
        // if it doesn't match
        if(!pass){
            return res.status(400).send({message : "Wrong Email or Password"})
        }
        // if it matches 
        const token = generateToken(user)
        return res.status(200).send({user, token});


    }
    catch(err){
        res.status(400).send({message : err.message})
    }
}

module.exports = {register,login}

