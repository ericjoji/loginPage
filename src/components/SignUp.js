import React from "react";

import useInput from "../hooks/use-input";

import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./Login.module.css";

const SignUp = () => {


  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: FirstNameInputHasError,
    valueChangeHandler: FirstNameChangedHandler,
    inputBlurHandler: FirstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: LastNameInputHasError,
    valueChangeHandler: LastNameChangedHandler,
    inputBlurHandler: LastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");

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

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredPasswordIsValid &&
    enteredEmailIsValid
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(
      enteredFirstName,
      enteredLastName,
      enteredEmail,
      enteredPassword
    );
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
    resetPasswordInput();
  };

  let ifErrorFirstName = FirstNameInputHasError && classes.lightred;

  let ifErrorLastName = LastNameInputHasError && classes.lightred;

  let ifErrorPassword = PasswordInputHasError && classes.lightred;

  let ifErrorEmail = EmailInputHasError && classes.lightred;

  return (
    <Container>
      <Card className="mt-5 p-4">
      <p><h2>Signup Form</h2></p>
        <Form onSubmit={formSubmitHandler} noValidate validated={formIsValid}>
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
          <Row>
            <Col>
              <Form.Group controlId="validationCustom01">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  className={ifErrorFirstName}
                  required
                  type="first-name"
                  placeholder="First Name"
                  onChange={FirstNameChangedHandler}
                  onBlur={FirstNameBlurHandler}
                  value={enteredFirstName}
                />
                {FirstNameInputHasError && (
                  <p className={classes.danger}>First Name must not be empty</p>
                )}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="validationCustom02">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  className={ifErrorLastName}
                  required
                  type="last-name"
                  placeholder="Last Name"
                  onChange={LastNameChangedHandler}
                  onBlur={LastNameBlurHandler}
                  value={enteredLastName}
                />
                {LastNameInputHasError && (
                  <p className={classes.danger}>Last Name must not be empty</p>
                )}
              </Form.Group>
            </Col>
          </Row>
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
  );
};

export default SignUp;
