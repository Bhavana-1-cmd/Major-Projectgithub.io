const mongoose = require("mongoose");
const User = require("../models/user.model.js");


const getAllUsers = async(req,res) => {
    try {
        const allUsers = await User.find();
        const alluserDeatils = [];
        allUsers.forEach(user => alluserDeatils.push({
            id: user._id,
            username: user.username,
            email: user.email,
        }))
        res.status(200).json(alluserDeatils);
    } catch (error) {
        return res.status(400).json({message:"Error in getAllUsers Controller",error});
    }
}

const updateUser = async(req,res) => {
    const {id:_id} = req.params;
    const {name,email} = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(400).json("Invalid Id");
    }

    try {
        const updateProfile = await User.findByIdAndUpdate(_id,{
            $set:{
                'username':name,
                'email':email,
                // 'age':age,
                // 'height':height,
                // 'weight':weight,
                // 'gender':gender,
                // 'address':address,
                // 'phone':phone,
            }
        },{new:true})
        res.status(200).json({updateProfile,message:"User updated"});
        // res.status(200).json({message:"User updated"});

    } catch (error) {
        return res.status(400).json({message:"Unable to update User"})
    }
}

module.exports = {getAllUsers, updateUser}