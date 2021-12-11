import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, NavbarBrand, Nav } from "react-bootstrap";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <NavbarBrand>Login Page</NavbarBrand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link>
            <Link to="LoginForm" className={classes.none}>
              login
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="SignUp" className={classes.none}>sign up</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/" className={classes.none}>home</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Home;
