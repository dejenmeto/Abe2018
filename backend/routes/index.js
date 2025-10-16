// import express
const express = require("express");
// import the router from express
const router = express.Router();
// import install router
const installrouter = require("./install.route");
const employeeRouter = require("./employee.route");
const loginRouter = require("./login.route");
// use the login router
router.use(loginRouter);
// use the employee router
router.use(employeeRouter);
// use the install router
router.use(installrouter);
// export the router
module.exports = router;
