import React, { Fragment } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Router>
        <Home />
        <Login />
        <SignUp />
      </Router>
    </Fragment>
  );
}

export default App;
