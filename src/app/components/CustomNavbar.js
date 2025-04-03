"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";

const CustomNavbar = () => {
  const [navbarBg, setNavbarBg] = useState("transparent");
  const [showOffcanvas, setShowOffcanvas] = useState(false);

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
    <>
      <Navbar
        expand="lg"
        className="fixed-top d-flex justify-content-between"
        style={{
          transition: "background-color 0.3s ease",
          backgroundColor: navbarBg,
          boxShadow: navbarBg === "white" ? "0px 4px 10px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <Container className="d-flex align-items-center">
          {/* ✅ Left Side - Logo + Toggle Button */}
          <div className="d-flex align-items-center">
            {/* Toggle Button */}
            <button
              className="border-0 bg-transparent p-2"
              onClick={() => setShowOffcanvas(true)} // ✅ Opens the offcanvas menu
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <span style={{ width: "20px", height: "3px", backgroundColor: "#000", borderRadius: "2px" }}></span>
              <span style={{ width: "30px", height: "3px", backgroundColor: "#000", borderRadius: "2px" }}></span>
            </button>

            {/* Logo */}
            <Navbar.Brand as={Link} href="/" className="ms-3">
              <img src="/images/logo-dark.svg" alt="Logo" style={{ width: "100px", height: "50px" }} />
            </Navbar.Brand>
          </div>

          {/* ✅ Right Side - Sign In / Register */}
          <Nav>
  <Link href="/auth/login" passHref>
    <Button variant="primary">Sign In / Register</Button>
  </Link>
</Nav>
        </Container>
      </Navbar>

      {/* ✅ Offcanvas Sidebar Menu (Now Opens on Click) */}
      <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Link href="/" className="nav-link" onClick={() => setShowOffcanvas(false)}>Home</Link>
            <Link href="/destinations" className="nav-link" onClick={() => setShowOffcanvas(false)}>Destinations</Link>
            <Link href="/blog" className="nav-link" onClick={() => setShowOffcanvas(false)}>Blog</Link>
            <Link href="/about" className="nav-link" onClick={() => setShowOffcanvas(false)}>About Us</Link>
            <Link href="/dashboard" className="nav-link" onClick={() => setShowOffcanvas(false)}>Dashboard</Link>
            <Link href="/contact" className="nav-link" onClick={() => setShowOffcanvas(false)}>Contact</Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CustomNavbar;
