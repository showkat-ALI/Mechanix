import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../context/useAuth";
import { HashLink } from "react-router-hash-link";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar className="nav" expand="lg" bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="#home">Mechanix</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link as={HashLink} to="/home#home">
            Home
          </Nav.Link>
          <Nav.Link as={HashLink} to="/home#services">
            Services
          </Nav.Link>
          <Nav.Link as={HashLink} to="/home#expart">
            Exparts
          </Nav.Link>
          {user.email ? (
            <>
              <span className="mx-4 mt-2" style={{ color: "white" }}>
                {user?.displayName}
              </span>

              <button onClick={logOut} className="btn btn-danger">
                Logout
              </button>
            </>
          ) : (
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
