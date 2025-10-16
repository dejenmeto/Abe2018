// import employee services
const employeeService = require("../services/employee.service");

async function createEmployee(req, res, next) {
  const employeeExists = await employeeService.checkIfEmployeeExist(
    req.body.employee_email
  );
  if (employeeExists) {
    res.status(400).json({
      message: "this email already exists",
    });
  } else {
    try {
      const employeeData = req.body;
      const employee = await employeeService.createEmployee(employeeData);
      if (!employee) {
        res.status(400).json({
          error: "employee not added from backend",
        });
      } else {
        res.status(200).json({
          status: "the amployee added successfully",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({
        error: "something went wrong",
      });
    }
  }
}

// export the controller
module.exports = {
  createEmployee,
};
