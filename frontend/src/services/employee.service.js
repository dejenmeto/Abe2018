// const api_url = import.meta.env.VITE_API_URL;

// this loggedInEmployeeToken is to be fetched from the local storage where it is stored after login and will send to backend for verification
const createEmployee = async (formData, loggedInEmployeeToken) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": loggedInEmployeeToken,
    },
    body: JSON.stringify(formData),
  };
  // console.log(requestOptions);
  //   const response = await fetch(`${api_url}/api/employee`, requestOptions);

  const response = await fetch(
    `https://abe2018.onrender.com/api/employee`,
    requestOptions
  );

  return response;
};

// after the clone is done, run the following command to to fetch the api data
// A function to send get request to get all employees from backend to display in the table on the Employees page of frontend
const getAllEmployees = async (token) => {
  // console.log(token);
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  };
  // api/employees
  const response = await fetch(
    "https://abe2018.onrender.com/api/employees",
    // `${apiUrl}/api/employees`,
    requestOptions
  );
  return response;
};
const employeeService = {
  createEmployee,
  getAllEmployees,
};

export default employeeService;
