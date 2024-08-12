const express = require('express');
const querySchemaValidator = require("../validators/querySchemaValidator")
const { handleURLRedirect } = require("../controllers/url")
const { handleHomePage, handleSignUp, handleLogin } = require("../controllers/staticRoutes")
const { checkSchema} = require("express-validator")

const router = express.Router()

router.get("/", handleHomePage)
router.get('/u/:id', checkSchema(querySchemaValidator), handleURLRedirect)
router.get('/signup', handleSignUp)
router.get('/login', handleLogin)

module.exports = router