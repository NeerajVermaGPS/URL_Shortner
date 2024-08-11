const express = require("express")
const path = require('path');
const urlRouter = require("./routes/url")
const staticRouter = require("./routes/staticRoutes")
const userRouter = require("./routes/user")
const { dbConnection } = require("./config/db")
const dotenv = require('dotenv');
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.set("view engine", "ejs")
app.use(express.static(path.resolve(__dirname, 'public')));
app.set("views", path.resolve("./views"))

app.use(express.json())
app.use("/url", urlRouter)
app.use("/", staticRouter)
app.use("/user", userRouter)

dbConnection("mongodb://localhost:27017/url_shortner")
  .then((res)=>{
    console.log("Connected to database!")
  })
  .catch((err) => {
    console.log("Error while connecting to database:", err.message)
  })

app.listen(PORT, ()=> {
    console.log("Server listening on port", PORT)
})