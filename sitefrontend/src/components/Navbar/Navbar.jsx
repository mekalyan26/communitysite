import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./Navbar.css";

const KWCNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary kwgc-navbar" fixed="top">
      <Container>
        <Navbar.Brand href="/">KWGC Bengali Cultural Group</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="kwgc-nav-container">
          <Nav className='kwgc-nav'>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href="/register">Sponsorship</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default KWCNavbar;
