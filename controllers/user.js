const User = require("../models/users")
const { validationResult, matchedData } = require("express-validator")
const { hashPassword, comparePassword } = require("../utils/hashing")

const handlePostUser = async (req, res) => {
    const result = validationResult(req)
    const errors = result.errors.map(err => err.msg)
    if(result.isEmpty()) {
        const data = matchedData(req)
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

const handleGetUser = async (req, res) => {
    try {
        const users = await User.find({})
        if(users.length > 0) return res.status(200).json(users);
        return res.status(200).json({message: "No user found!"})
    } catch (error) {
        return res.status(500).json({error: "Internal server error!"})
    }
}

module.exports = {
    handleGetUser,
    handlePostUser
}