// import query function from db.js
const conn = require("../config/db.config");
// import bcrypt module
const bcrypt = require("bcrypt");
// import jwt module
// const jwt = require("jsonwebtoken");
const employeeService = require("./employee.service");

// // function to handle login

async function login(employeeData) {
  try {
    let returnData = {};

    // get employee by email
    const employee = await employeeService.getEmployeeByEmail(
      employeeData.employee_email
    );

    if (employee.length === 0) {
      return { status: "fail", message: "Email not found" };
    }

    // compare the password
    const passwordMatch = await bcrypt.compare(
      employeeData.employee_password,
      employee[0].employee_password_hashed
    );

    if (!passwordMatch) {
      return {
        status: "fail",
        message: "Invalid email or password from backend 2018",
      };
    }

    // login success
    return {
      status: "success",
      data: employee[0],
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
// export the login function
module.exports = {
  login,
};
