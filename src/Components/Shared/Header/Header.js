import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";
import logo from "../../images/logo.png";
import { HashLink } from "react-router-hash-link";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [user] = useAuthState(auth);

  console.log("userssssss", user);

  return (
    <>
      <Navbar collapseOnSelect sticky="top" expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img height={30} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-white" href="home#service">
                Service
              </Nav.Link>
              <Nav.Link className="text-white" href="home#expert">
                Experts
              </Nav.Link>
              {/* <HashLink className="text-white" to="home#expert">
                Experts
              </HashLink> */}
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/map">
                Map
              </Nav.Link>
              {user ? (
                <button
                  onClick={() => signOut(auth)}
                  className="btn btn-link text-decoration-none text-white"
                >
                  Sign Out
                </button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
            <div>
              {user?.photoURL ? (
                <img
                  width={40}
                  className="rounded-circle border-white border border-2"
                  src={user?.photoURL}
                  alt=""
                  srcset=""
                />
              ) : (
                <FaUserCircle className="text-white fs-3" />
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
