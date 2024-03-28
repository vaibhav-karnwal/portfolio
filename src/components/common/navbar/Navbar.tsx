import React, { FC, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdOutlinePhoneAndroid } from "react-icons/md";

const NavBar: FC = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      {/* <Advertisement /> */}
      <Container className="justify-content-md-center align-items-end">
        <Navbar.Brand href="/portfolio" className="align-self-center">
          <div className="img-fluid secondary logo">
            its.me<span>.vaibhavkarnwal</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : true);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse className="flex-grow-0" id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                className="text-shadow-dark"
                as={Link}
                to="/portfolio"
                onClick={() => updateExpanded(false)}
              >
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                className="text-shadow-dark"
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                className="text-shadow-dark"
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                className="text-shadow-dark"
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                className="align-items-center d-flex text-shadow-dark"
                as={Link}
                to="tel:9997243157"
                onClick={() => updateExpanded(false)}
              >
                {"Contact "}
                <MdOutlinePhoneAndroid />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
