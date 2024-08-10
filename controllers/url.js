const {matchedData} = require("express-validator")
const {validationResult} = require("express-validator")
const URL = require("../models/urls")
const { generateShortId } = require("../utils/shortid")
const { getDate } = require("../utils/date")

const handleURLGeneration = async (req, res) => {
    const result = validationResult(req)
    const errors = result.errors.map(err => err.msg)
    if (result.isEmpty()){
        const data = matchedData(req)
        const shortId = generateShortId(8)
        await URL.create({
            shortId: shortId,
            redirectURL: data.redirectURL,
            visitHistory: []
        })
        return res.status(201).json({ id: shortId })
    }
    return res.status(400).send(errors)
}

const handleURLRedirect = async (req, res) => {
    const result = validationResult(req)
    const errors = result.errors.map(err => err.msg)
    if (result.isEmpty()){
        const date = getDate()
        const shortId = matchedData(req).id
        const data = await URL.findOneAndUpdate({shortId}, {
            $push: {
                visitHistory: {
                    timestamp: date
                }
            }
        })
        return res.redirect(data.redirectURL)
    }
    return res.status(400).send(errors)
}

const handleURLAnalytics = async (req, res) => {
    const result = validationResult(req)
    const errors = result.errors.map(err => err.msg)
    if (result.isEmpty()){
        const shortId = matchedData(req).id
        const data = await URL.findOne({shortId})
        return res.status(200).json({history: data.visitHistory.map(ts => ts.timestamp), totalVisits: data.visitHistory.length})
    }
    return res.status(400).send(errors)
}

module.exports = {
    handleURLGeneration,
    handleURLRedirect,
    handleURLAnalytics
}