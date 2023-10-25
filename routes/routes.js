const express = require("express");
const routes = express.Router();
const { userRegister, userLogin, getData } = require("../controllers/userController.js");
//for home page
routes.get("/", getData);

//for registration

routes.post("/register",userRegister)

//for login
routes.post("/login",userLogin)

module.exports = routes; 
