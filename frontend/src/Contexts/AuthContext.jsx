import React, { useContext, useState, useEffect } from "react";

import getAuth from "../util/auth.js";

const AuthContext = React.createContext();

// create custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [employee, setEmployee] = useState(null);

  const value = { isLogged, setIsLogged, isAdmin, setIsAdmin, employee };

  useEffect(() => {
    const LoggedInEmployee = getAuth();
    LoggedInEmployee.then((response) => {
      if (response.employee_token) {
        setIsLogged(true);

        if (response.employee_role === 3) {
          setIsAdmin(true);
        }
        setEmployee(response);
      }
    });
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
