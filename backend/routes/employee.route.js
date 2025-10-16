// import express from 'express';
const express = require("express");
// import the routers from express
const router = express.Router();
// import the employee controller
const employeeController = require("../controller/employee.controller");
// import the auth middleware
const authMiddleware = require("../middlewares/auth.middleware");
router.post("/api/employee", employeeController.createEmployee);
// write post reques for adding employee
router.post(
  "/api/employee",
  [authMiddleware.verifyToken, authMiddleware.isAdmin],
  employeeController.createEmployee
);
// export the router
module.exports = router;
