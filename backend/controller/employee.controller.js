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
// after the clone is done, run the following command to install the dependencies
// Create the getAllEmployees controller after the clone is done, run the following command to to send the api data for frontend
async function getAllEmployees(req, res, next) {
  // Call the getAllEmployees method from the employee service
  const employees = await employeeService.getAllEmployees();
  // console.log(employees);
  if (!employees) {
    res.status(400).json({
      error: "Failed to get all employees!",
    });
  } else {
    res.status(200).json({
      status: "success",
      data: employees,
    });
  }
}
// export the controller
module.exports = {
  createEmployee,
  getAllEmployees,
};
