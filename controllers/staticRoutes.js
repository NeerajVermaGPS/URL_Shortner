const { getUser } = require('../services/auth')
const URL = require("../models/urls")

const handleHomePage = async (req, res) => {
    const user = getUser(req.cookies.uid)
    const data = user ? await URL.find({createdBy: user.id}) : null
    const name = user ? user.username : null
    const message = user ? "No previous data!" : "You need to login to see your previous data!"
    return res.render("home", {
        name: name,
        urls: data,
        message: message
    })
}

const handleSignUp = (req, res) =>  {
    const user = getUser(req.cookies.uid)
    return user ? res.redirect('/') : res.render("signup")
}
const handleLogin = (req, res) => {
    const user = getUser(req.cookies.uid)
    return user ? res.redirect('/') : res.render("login")
}

module.exports = {
    handleHomePage,
    handleSignUp,
    handleLogin
}