const logIn = async (formData) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };
  console.log("About to send request");
  console.log(requestOptions.body);

  const response = await fetch(
    `http://localhost:5000/api/employee/login`,
    requestOptions
  );
  return response;
};
// write function to delete local storage
const logout = () => {
  localStorage.removeItem("employee");
};
// export const loginService = {
export const loginService = {
  logIn,
  logout,
};
// };

export default loginService;
