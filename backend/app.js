// import express
const express = require("express");
// import cors from "cors";
require("dotenv").config();
// import sanitize from "sanitize";
const sanitize = require("sanitize");
// import the routes
const routes = require("./routes");
// call express
const app = express();
// import cors package
const cors = require("cors");

// const requestoptions = {
//   origin: process.env.FRONTEND_URL, // Replace with your frontend URL
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders: ["Content-Type", "Authorization"],
//   optionsuccessStatus: 200,
// };

// app.use(cors(requestoptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(sanitize.middleware);

// use the routes
app.use(routes);
// define the port

const port = process.env.PORT;
// use the cors package
// app.use(cors());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// export the app
module.exports = app;
