const express = require('express');
const { userSchemaValidation } = require("../validators/userSchemaValidation")
const { checkSchema } = require("express-validator")
const { handleGetUser, handlePostUser } = require("../controllers/user")
const router = express.Router()

router.get("/allUser", handleGetUser)
router.post("/", checkSchema(userSchemaValidation), handlePostUser)

module.exports = router