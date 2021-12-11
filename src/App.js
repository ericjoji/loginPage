import React, { Fragment } from "react";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <Fragment>
      <Home />
      <Routes>
        <Route path="/LoginForm" element={<LoginForm />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Fragment>
  );
}

export default App;
