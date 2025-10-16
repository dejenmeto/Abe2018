import React from "react";

import useAuth from "../../../util/auth";
import LogInForm from "../../components/LoginForm/LoginForm";

function Employees() {
  const { isLogged, isAdmin } = useAuth();
  // console.log(isLogged, isAdmin);\\
  // conditionally render the Employees page based on the isLogged and isAdmin values
  // If the user is logged in and is an admin, show the Employees page
  // If the user is not logged in, show the login form
  // If the user is logged in but not an admin, show an unauthorized message

  if (isLogged) {
    if (isAdmin) {
      return (
        <div>
          {/* <div className="container-fluid admin-pages">
            <div className="row">
              <div className="col-md-3 admin-left-side">
                <AdminMenu />
              </div>
              <div className="col-md-9 admin-right-side">
          <EmployeesList />
           
          </div>
            </div>
          </div> */}
          <h1>employees pages great</h1>
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
        <LogInForm />
      </div>
    );
  }
}
export default Employees;
