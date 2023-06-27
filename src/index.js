import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./Login";
import Signup from "./Signup";
import ForgotPass from "./Forgotpassword";
import Otp from "./Otp";
import ChooseOption from "./ChooseOption";
import Home from "./trangchu/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ToastContainer />
      <App />
    </Router>
    {/* <Login /> */}
    {/* <Signup /> */}
    {/* <ForgotPass /> */}
    {/* <Otp /> */}
    {/* <ChooseOption /> */}
    {/* <Home /> */}
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
