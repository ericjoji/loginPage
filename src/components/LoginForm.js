import React, { Fragment, useState } from "react";

import useInput from "../hooks/use-input";

import { Button, Card, Form, Container, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./Login.module.css";

const LoginForm = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorLog, setErrorLog] = useState(false);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: EmailInputHasError,
    valueChangeHandler: EmailChangedHandler,
    inputBlurHandler: EmailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: PasswordInputHasError,
    valueChangeHandler: PasswordChangedHandler,
    inputBlurHandler: PasswordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (enteredPasswordIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setLoggedIn(true);

    localStorage.setItem("loggedIn", loggedIn);
    console.log(loggedIn);
    if (
      localStorage.getItem("email") === enteredEmail &&
      localStorage.getItem("password") === enteredPassword
    ) {
      setErrorLog(false);
      setLoggedIn(true);
      localStorage.setItem("loggedIn", true);
    } else {
      setErrorLog(true);
      setLoggedIn(false);
      localStorage.setItem("loggedIn", false);
    }
    console.log(enteredEmail, enteredPassword, loggedIn);

    resetEmailInput();
    resetPasswordInput();
    setLoggedIn(true);
    loginHandler();
  };
  console.log(loggedIn);

  const loginHandler = () => {
    setLoggedIn(true);
  };

  const logoutHandler = () => {
    setLoggedIn(false);
    localStorage.setItem("loggedIn", false);
  };

  let ifErrorPassword = PasswordInputHasError && classes.lightred;

  let ifErrorEmail = EmailInputHasError && classes.lightred;

  if (localStorage.getItem("loggedIn") === true) {
    setLoggedIn(true);
  }

  let tempValue = localStorage.getItem("loggedIn");
  console.log(tempValue);
  tempValue = false;
  return (
    <Fragment>
      {!tempValue ? (
        <Container>
          <Card className="mt-5 p-4">
            <p>
              <h2>Login page</h2>
            </p>
            <Form
              onSubmit={formSubmitHandler}
              noValidate
              validated={formIsValid}
            >
              <Form.Group hasValidation>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className={ifErrorEmail}
                  required
                  type="email"
                  placeholder="Example@email.com"
                  onChange={EmailChangedHandler}
                  onBlur={EmailBlurHandler}
                  value={enteredEmail}
                />
                {EmailInputHasError && (
                  <p className={classes.danger}>Email must not be empty</p>
                )}
              </Form.Group>
              <Form.Group controlId="validationCustom03">
                <Form.Label>password</Form.Label>
                <Form.Control
                  className={ifErrorPassword}
                  required
                  type="password"
                  placeholder="password"
                  onChange={PasswordChangedHandler}
                  onBlur={PasswordBlurHandler}
                  value={enteredPassword}
                />
                {PasswordInputHasError && (
                  <p className={classes.danger}>Password must not be empty</p>
                )}
              </Form.Group>
              <Button
                disabled={!formIsValid}
                variant="outline-primary"
                onClick={formSubmitHandler}
                className="mt-3"
              >
                Submit
              </Button>{" "}
            </Form>
          </Card>
        </Container>
      ) : (
        <Fragment>
          <Container className="m-5">
            <Card>
              <p className="p-4 m-3">
                welcome back {localStorage.getItem("firstName")} You are logged
                in
              </p>
            </Card>
            <Button variant="danger" onClick={logoutHandler}>
              logout
            </Button>
          </Container>
        </Fragment>
      )}
      {errorLog && (
        <Container>
          <Alert variant="danger">
            <p>wrong credentials</p>
          </Alert>
        </Container>
      )}
    </Fragment>
  );
};

export default LoginForm;
