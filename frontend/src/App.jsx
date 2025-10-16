import { Route, Routes } from "react-router-dom";
import Home from "./markup/pages/Home";

import AddEmployee from "./markup/pages/Admin/AddEmployee";
import Header from "./markup/components/Header/Header";
import Footer from "./markup/components/Footer/Footer";
import UnAuthorized from "./markup/pages/UnAuthorized";
// import LoginForm from "./markup/components/LoginForm/LoginForm";
import Login from "./markup/pages/Login";
// import customers, employees, and orders pages
import Customers from "./markup/pages/Admin/Customers";
import Employees from "./markup/pages/Admin/Employees";
import Orders from "./markup/pages/Admin/Orders";
// import Contact from "./markup/pages/Contact";
// import private route

import PrivateAuthRoute from "./markup/components/Auth/PrivateAuthRoute";
// import AddEmployeeForm from "./markup/components/Admin/AddEmployeForm/AddEmployeeForm";

// import css
import "./assets/template-assets/css/bootstrap.css";
import "./assets/template-assets/css/style.css";
import "./assets/template-assets/css/responsive.css";
import "./assets/template-assets/css/color.css";
// Import the custom css file
import "./assets/styles/custom.css";
// import LogniForm from "./markup/components/LoginForm/LogniForm";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<UnAuthorized />} />
        {/* <Route path="/contact" element={<Contact />} /> */}

        {/* add orders page */}
        <Route
          path="/orders"
          element={
            <PrivateAuthRoute roles={[1, 2, 3]}>
              <Orders />
            </PrivateAuthRoute>
          }
        />
        {/* <Route path="/orders" element={<Orders />} /> */}

         <Route path="/AddEmployee" element={<AddEmployee />} /> 

        <Route
          path="/customers"
          element={
            <PrivateAuthRoute roles={[2, 3]}>
              <Customers />
            </PrivateAuthRoute>
          }
        />
        <Route
          path="/AddEmployee"
          element={
            <PrivateAuthRoute roles={[1, 2]}>
              <AddEmployee />
            </PrivateAuthRoute>
          }
        />

        <Route
          path="/api/employees"
          element={
            <PrivateAuthRoute roles={[1, 2, 3]}>
              <Employees />
            </PrivateAuthRoute>
          }
          // element={<Employees />}
        />
         <Route path="/employees" element={<Employees />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
