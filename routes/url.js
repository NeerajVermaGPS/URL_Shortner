const express = require("express")
const { handleURLGeneration } = require("../controllers/url")
const { handleURLAnalytics } = require("../controllers/url")
const { checkSchema } = require("express-validator")
const urlSchemaValidation = require("../validators/urlSchemaValidation")
const querySchemaValidator = require("../validators/querySchemaValidator")
 
const router = express.Router()

router.post("/", checkSchema(urlSchemaValidation), handleURLGeneration)
router.get("/analytics/:id", checkSchema(querySchemaValidator), handleURLAnalytics)

module.exports = router

