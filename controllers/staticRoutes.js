const URL = require("../models/urls")

const handleHomePage = async (req, res) => {
    const data = await URL.find({})
    return res.render("home", {
        name: "Madam",
        urls: data
    })
}

const handleSignUp = (req, res) => {
    return res.render("signup")
}

module.exports = {
    handleHomePage,
    handleSignUp
}