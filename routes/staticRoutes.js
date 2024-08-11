const express = require('express');
const querySchemaValidator = require("../validators/querySchemaValidator")
const { handleURLRedirect } = require("../controllers/url")
const { handleHomePage, handleSignUp } = require("../controllers/staticRoutes")
const { checkSchema} = require("express-validator")

const router = express.Router()

router.get("/", handleHomePage)
router.get('/url/:id', checkSchema(querySchemaValidator), handleURLRedirect)
router.get('/signup', handleSignUp)
router.get('/login', (req, res) => {
    res.send("To be updated!")
})

module.exports = router