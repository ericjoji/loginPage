import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, NavbarBrand, Nav, Button } from "react-bootstrap";
import classes from "./Home.module.css";

const Home = (props) => {
  let loggedIn = localStorage.getItem("loggedIn");

  const logoutHandler = () => {
    localStorage.setItem("loggedIn", false);
  };

  return (
    <Fragment>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <NavbarBrand>Login Page</NavbarBrand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link>
              <NavLink
                activeClassName={classes.active}
                to="/"
                className={classes.none}
              >
                home
              </NavLink>
            </Nav.Link>
            {loggedIn && (
              <Fragment>
                <Nav.Link>
                  <NavLink
                    activeClassName={classes.active}
                    to="LoginForm"
                    className={classes.none}
                  >
                    login
                  </NavLink>
                </Nav.Link></Fragment>)}
                <Nav.Link>
                  <NavLink
                    activeClassName={classes.active}
                    to="SignUp"
                    className={classes.none}
                  >
                    sign up
                  </NavLink>
                </Nav.Link>
              
            
          </Nav>
          <Button onClick={logoutHandler}>Logout</Button>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default Home;
