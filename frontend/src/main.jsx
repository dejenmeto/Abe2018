import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// import auth provider
import AuthProvider from "./Contexts/AuthContext";

// render the app component

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
