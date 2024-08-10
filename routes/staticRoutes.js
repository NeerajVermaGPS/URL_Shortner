const express = require('express');
const querySchemaValidator = require("../validators/querySchemaValidator")
const { handleURLRedirect } = require("../controllers/url")
const { handleHomePage } = require("../controllers/staticRoutes")
const { checkSchema} = require("express-validator")

const router = express.Router()

router.get("/", handleHomePage)
router.get('/:id', checkSchema(querySchemaValidator), handleURLRedirect)

module.exports = router