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
    `http://localhost:5000/api/employee`,
    requestOptions
  );

  return response;
};

const employeeService = {
  createEmployee,
};

export default employeeService;
