const express = require("express");
require("dotenv").config()
const app = express();
const connectToDb = require("./config/db.js")
const cors = require("cors")
// init  connection to db
connectToDb();


app.use(cors());
app.use(express.json()) //middleware to work with json data

const userRoutes = require("./routes/routes.js")

app.use("/",userRoutes)

module.exports = app;