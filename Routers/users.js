const loginUser = require("../Controllers/Users/loginUser");
const registerUser = require("../Controllers/Users/registerUser");

const userRoutes = require("express").Router();

userRoutes.post("/register", registerUser);
userRoutes.post("/login", loginUser);

module.exports = userRoutes;
