// Import React, the useState and useEffect hooks
import React, { useState, useEffect } from "react";
// Import the Route and Navigate components
import { Navigate } from "react-router-dom";
// Import the Util function we created to handle the reading from the local storage
import getAuth from "../../../util/auth";

const PrivateAuthRoute = ({ roles, children }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    // Retrieve the logged in user from local storage
    const loggedInEmployee = getAuth();
    // console.log(loggedInEmployee);
    loggedInEmployee.then((response) => {
      if (response.employee_token) {
        // If in here, that means the user is logged in
        // console.log(response);
        // console.log("Set logged in to true");
        setIsLogged(true);
        if (
          roles &&
          roles.length > 0 &&
          roles.includes(response.employee_role)
        ) {
          // If in here, that means the user is logged and has  authorization to access the route
          // console.log("Set authorized to true");
          setIsAuthorized(true);
        }
      }
      setIsChecked(true);
    });
  }, [roles]);
  // If the user is not logged in, redirect to login page
  // If the user is logged in but not authorized, redirect to unauthorized page
  // If the user is logged in and authorized, render the children components (the protected route)
  // Only do the above checks after we have checked the local storage
  // to avoid flickering effect
  if (isChecked) {
    if (!isLogged) {
      return <Navigate to="/login" />;
    }
    if (!isAuthorized) {
      return <Navigate to="/unauthorized" />;
    }
  }

  return children;
};

export default PrivateAuthRoute;
