import React from "react";
import logoImg from "../images/logo_main.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={logoImg} alt="TOURinSouthKoreaNow" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/artinkorea">Arts</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/foodinkorea">Food and Cafe</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/tourist">Tour locatioin</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/info">Why Visit South Korea?</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/vidoes">Trip Videos</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link>
              <Link to="/review">Leave you comment!</Link>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
export default Header;
