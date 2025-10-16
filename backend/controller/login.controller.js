// /import login services
const loginService = require("../services/login.service");
// import jsionwebtoken
const jwt = require("jsonwebtoken");
// import secret from env
const jwt_secret = process.env.JWT_SECRET;
// write login function
async function login(req, res, next) {
  try {
    const employeeData = req.body;
    const employee = await loginService.login(employeeData);
    if (employee.status === "fail") {
      console.log("Login failed:", employee.message);
      res.status(403).json({
        status: employee.status,
        message: employee.message,
      });
    }
    // if login is successful, create a token and send it to the frontend for further use
    const payLoad = {
      employee_id: employee.data.employee_id,
      employee_email: employee.data.employee_email,
      employee_role: employee.data.company_role_id,
      employee_first_name: employee.data.employee_first_name,
      employee_last_name: employee.data.employee_last_name,
    };
    const token = jwt.sign(payLoad, jwt_secret, { expiresIn: "24h" });

    const sendBack = {
      employee_token: token,
    };
    res.status(200).json({
      status: "success",
      message: "login successful",
      data: sendBack,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
}
// export the controller
module.exports = {
  login,
};
