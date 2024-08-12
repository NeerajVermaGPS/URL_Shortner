const express = require('express');
const { userSchemaValidation, userLogInSchemaValidation } = require("../validators/userSchemaValidation")
const { checkSchema } = require("express-validator")
const { handleGetUser, handleGetAllUser, handleSignupUser, handleLoginUser } = require("../controllers/user")
const { validateLoggedUser } = require("../middlewares/authMiddleware")
const router = express.Router()

router.get("/allUser", validateLoggedUser, handleGetAllUser)
router.get("/", handleGetUser)
router.post("/signup", checkSchema(userSchemaValidation), handleSignupUser)
router.post("/login", checkSchema(userLogInSchemaValidation), handleLoginUser)

module.exports = router