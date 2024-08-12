const { getUser } = require('../services/auth')
const URL = require("../models/urls")

const handleHomePage = async (req, res) => {
    const user = getUser(req.cookies.uid)
    const data = user ? await URL.find({createdBy: user.id}) : null
    const message = user ? "No previous data!" : "You need to login to see your previous data!"
    return res.render("home", {
        name: "Madam",
        urls: data,
        message: message
    })
}

const handleSignUp = (req, res) =>  res.render("signup")
const handleLogin = (req, res) => res.render("login")

module.exports = {
    handleHomePage,
    handleSignUp,
    handleLogin
}