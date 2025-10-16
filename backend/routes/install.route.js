// import the express module
const express = require("express");
// import the router from express
const router = express.Router();
// import the install controller
const installController = require("../controller/install.controller");
// import the auth middleware
// const authMiddleware = require("../middlewares/auth.middleware");
// create the install route
router.get(
  "/install",

  installController.install
);
// export the router
module.exports = router;
