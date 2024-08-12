const dotenv = require('dotenv');
dotenv.config()

const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET_KEY

const setUser = (user) => jwt.sign(user, secret)
const getUser = (token) => {
    if(!token) return null;
    return jwt.verify(token, secret)
}

module.exports = {
    setUser,
    getUser
}