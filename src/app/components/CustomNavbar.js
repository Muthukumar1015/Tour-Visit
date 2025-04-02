"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const CustomNavbar = () => {
  const [navbarBg, setNavbarBg] = useState("transparent");

  // ✅ Detect Scroll & Change Navbar Background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg("white"); // Change to white on scroll
      } else {
        setNavbarBg("transparent"); // Keep transparent at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar expand="lg" className="fixed-top" style={{ transition: "background-color 0.3s ease", backgroundColor: navbarBg, boxShadow: navbarBg === "white" ? "0px 4px 10px rgba(0, 0, 0, 0.1)" : "none" }}>
      <Container>
        {/* Custom Toggle Button (☰ with 2 thick lines) */}
        <Navbar.Toggle aria-controls="navbar-nav" className="border-0">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "5px" }}>
            <span style={{ display: "block", width: "30px", height: "4px", backgroundColor: "#000", borderRadius: "2px" }}></span>
            <span style={{ display: "block", width: "30px", height: "4px", backgroundColor: "#000", borderRadius: "2px" }}></span>
          </div>
        </Navbar.Toggle>

        {/* Logo */}
        <Navbar.Brand as={Link} href="/">
          <img src="/images/logo-dark.svg" alt="Logo" style={{ width: "100px", height: "50px" }} />
        </Navbar.Brand>

        {/* Navbar Items */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Home" id="home-dropdown">
              <NavDropdown.Item as={Link} href="/">Home 1</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/">Home 2</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Categories" id="categories-dropdown">
              <NavDropdown.Item as={Link} href="/">Category 1</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/">Category 2</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} href="/destinations">Destinations</Nav.Link>

            <NavDropdown title="Blog" id="blog-dropdown">
              <NavDropdown.Item as={Link} href="/blog">Latest Posts</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Pages" id="pages-dropdown">
              <NavDropdown.Item as={Link} href="/about">About Us</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Dashboard" id="dashboard-dropdown">
              <NavDropdown.Item as={Link} href="/dashboard">My Dashboard</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} href="/contact">Contact</Nav.Link>
          </Nav>

          {/* Right-Side Buttons */}
          <Nav>
            <Button variant="primary" className="me-2">Become An Expert</Button>

            {/* ✅ Link the Sign In / Register button to the sign-up page */}
            <Link href="/signup" passHref>
              <Button variant="outline-primary">Sign In / Register</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
