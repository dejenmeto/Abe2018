import React from "react";
// Import the auth hook

import { useAuth } from "../../../Contexts/AuthContext";
// Import the Login component
import LoginForm from "../../components/LoginForm/LoginForm";
// import the adminmenu component
import AdminMenu from "../../components/Admin/AdminMenu/AdminMenu";
// // import the EmployeesList component
import EmployeesList from "../../components/Admin/EmployeesList/EmployeesList";
function Employees() {
  // Destructure the auth hook
  const { isLogged, isAdmin } = useAuth();
  // conditionally render the Employees page based on the isLogged and isAdmin values
  // If the user is logged in and is an admin, show the Employees page
  // If the user is not logged in, show the login form
  // If the user is logged in but not an admin, show an unauthorized message

  if (isLogged) {
    if (isAdmin) {
      return (
        <div>
          <div className="container-fluid admin-pages">
            <div className="row">
              <div className="col-md-3 admin-left-side">
                <AdminMenu />
              </div>
              <div className="col-md-9 admin-right-side">
                <EmployeesList />
                {/* <h1>employees pages great</h1> */}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1>You are not authorized to access this page</h1>
        </div>
      );
    }
  } else {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}

export default Employees;
