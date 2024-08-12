const User = require("../models/users")
const { validationResult, matchedData } = require("express-validator")
const { hashPassword, comparePassword } = require("../utils/hashing")
const { setUser } = require('../services/auth')

const handleSignupUser = async (req, res) => {
    const result = validationResult(req)
    const errors = result.errors.map(err => err.msg)
    if(result.isEmpty()) {
        const data = matchedData(req) 
        const user = await User.findOne({username: data.username}) || await User.findOne({email: data.email})
        if(user) return res.status(400).json({error: ["Username or email already exists!"]})
        data.password = hashPassword(data.password)
        const newUser = new User(data)
        try{
            const savedUser = await newUser.save()
            return res.status(201).send(savedUser)
        } catch(err) {
            return res.sendStatus(400)
        }
    }
    return res.status(401).json({error: errors})
}

const handleGetAllUser = async (req, res) => {
    try {
        const users = await User.find({})
        if(users.length > 0) return res.status(200).json(users);
        return res.status(200).json({message: "No user found!"})
    } catch (error) {
        return res.status(500).json({error: "Internal server error!"})
    }
}

const handleGetUser = (req, res) => {
    res.render("home")
}

const handleLoginUser = async (req, res) => {
    const result = validationResult(req)
    const errors = result.errors.map(err => err.msg)
    if(result.isEmpty()) {
        const data = matchedData(req)
        try{
            const findUser = await User.findOne({username : data.username})
            if(!findUser) throw new Error("User not found!")
            if(!comparePassword(data.password, findUser.password)) throw new Error("Username or password is wrong!")
            const token = setUser({id: findUser._id, username: findUser.username, email: findUser.email, createdAt: Date.now()})
            // res.cookie("uid", token)
            // return res.sendStatus(200);
            return res.json({token});
        } catch(err) {
            return res.status(400).json({error: [err.message]})
        }
    }
    return res.status(401).json({error: errors})
}

module.exports = {
    handleGetUser,
    handleSignupUser,
    handleGetAllUser,
    handleLoginUser
}