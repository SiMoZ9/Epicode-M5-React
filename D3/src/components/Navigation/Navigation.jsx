import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { links } from "../../data/navlinks";
import React, { Component } from "react";
import {nanoid} from "nanoid"

class Navigation extends Component {
  render() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {links.map((link) => {
                return (
                  <Nav.Link key={nanoid()} href={link.url}>{link.label}</Nav.Link>

                )
              })}
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    );
  }
}

export default Navigation;
 