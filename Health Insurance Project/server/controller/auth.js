const User = require("../models/user.model.js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const signup = async (req,res) => {
    const {name, email, password} = req.body;

    try {
        const existingUser = await User.findOne({email}); 
        if(existingUser) {
            return res.status(303).json({message: 'User found, please login'})
        }
        
        const hashedPasword = await bcrypt.hash(password,12)
        const newUser = User.create(
            {   username:name,
                email,
                password:hashedPasword,
            })
        const token = jwt.sign({email: newUser.email, id: newUser._id}, "test", {expiresIn: "1h"})
        return res.status(200).json({message:"Signup Successful", result:{
            username: newUser.username,
            email: newUser.email,
            password: newUser.password
        }, token })
    } catch (error) {
        return res.status(500).json({message:"Signup Unsuccessful......"})
    }
}

const login = async(req,res) => {
    const {email, password} = req.body;

    try {
        const existingUser = await User.findOne({email}); 
        if(!existingUser) {
            return res.status(404).json({message: 'User not found'})
        }
        const isPasswordCrrt = await bcrypt.compare(password,existingUser.password)
        if(!isPasswordCrrt){
            return res.status(404).json({message:"Password Incorrect"})
        }
        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, "test", {expiresIn: "1h"})

        return res.status(200).json({message: "LogIn Sucessful", result: existingUser, token})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Login Unsucessful......"})
    }
}

module.exports = {signup, login}