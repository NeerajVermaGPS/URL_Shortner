const express = require("express")
const urlRouter = require("./routes/url")
const { dbConnection } = require("./config/db")
const { handleURLRedirect } = require("./controllers/url")
const { checkSchema} = require("express-validator")
const querySchemaValidator = require("./validators/querySchemaValidator")
const dotenv = require('dotenv');
dotenv.config()

const app = express()

app.use(express.json())

app.use("/url", urlRouter)

dbConnection("mongodb://localhost:27017/url_shortner")
  .then((res)=>{
    console.log("Connected to database!")
  })
  .catch((err) => {
    console.log("Error while connecting to database:", err.message)
  })

const PORT = process.env.PORT || 3000

app.get('/:id', checkSchema(querySchemaValidator), handleURLRedirect)

app.listen(PORT, ()=> {
    console.log("Server listening on port", PORT)
})