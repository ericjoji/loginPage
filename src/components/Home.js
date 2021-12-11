import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, NavbarBrand, Nav } from "react-bootstrap";

const Home = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <NavbarBrand>Login Page</NavbarBrand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link href="login">login</Nav.Link>
          <Nav.Link href="sign-up">sign up</Nav.Link>
          <Nav.Link href="home">home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Home;
