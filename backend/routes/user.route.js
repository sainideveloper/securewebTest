const express = require("express");
const userRoute = express();
const bodyParser = require("body-parser");
userRoute.use(bodyParser.json());
userRoute.use(bodyParser.urlencoded({extended:true}));
const userController = require("../controllers/user.controller");


userRoute.post('/register', userController.register);


userRoute.post('/login', userController.login);


module.exports = userRoute;