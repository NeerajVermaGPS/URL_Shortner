const URL = require("../models/urls")

const handleHomePage = async (req, res) => {
    const data = await URL.find({})
    return res.render("index", {
        name: "Madam",
        urls: data
    })
}

module.exports = {
    handleHomePage
}