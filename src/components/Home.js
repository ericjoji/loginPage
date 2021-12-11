import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, NavbarBrand, Nav, Container, Card } from "react-bootstrap";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <NavbarBrand>Login Page</NavbarBrand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link>
              <Link to="/Welcome" className={classes.none}>
                home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="LoginForm" className={classes.none}>
                login
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="SignUp" className={classes.none}>
                sign up
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default Home;
