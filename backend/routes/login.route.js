// import express from "express"; --- IGNORE ---
const express = require("express");
// import the router from express
const router = express.Router();
// import login controller
const loginController = require("../controller/login.controller");
// for login route
router.post("/api/employee/login", loginController.login);
// export the router
module.exports = router;
