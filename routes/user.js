const express = require('express');
const { userSchemaValidation, userLogInSchemaValidation } = require("../validators/userSchemaValidation")
const { checkSchema } = require("express-validator")
const { handleGetAllUser, handleSignupUser, handleLoginUser, handleLogoutUser } = require("../controllers/user")
const { restrictAccessTo } = require("../middlewares/authMiddleware")
const router = express.Router()

router.get("/allUser", restrictAccessTo(["ADMIN"]), handleGetAllUser)
router.post("/signup", checkSchema(userSchemaValidation), handleSignupUser)
router.post("/login", checkSchema(userLogInSchemaValidation), handleLoginUser)
router.post("/logout", restrictAccessTo(["ADMIN", "NORMAL"]), handleLogoutUser)

module.exports = router