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
          padding: "10px 20px",
        }}
      >
        <Container className="d-flex align-items-center" style={{ position: "relative" }}>
          {/* ✅ Left Side - Toggle Button */}
          <button
            className="border-0 bg-transparent p-2"
            onClick={() => setShowOffcanvas(true)}
            style={{
              position: "absolute",
              left: "15px",
              top: "50%",
              transform: "translateY(-50%)",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <span style={{ width: "30px", height: "3px", backgroundColor: "#000", borderRadius: "2px" }}></span>
            <span style={{ width: "20px", height: "3px", backgroundColor: "#000", borderRadius: "2px" }}></span>
          </button>

          {/* ✅ Center - Logo */}
          <Navbar.Brand as={Link} href="/" style={{ margin: "0 auto" }}>
            <img src="/images/logo-dark.svg" alt="Logo" style={{ width: "100px", height: "auto" }} />
          </Navbar.Brand>

          {/* ✅ Right Side - Sign In / Register */}
          <Nav className="sign-in-btn" style={{ display: "block" }}>
            <Link href="/auth/login" passHref>
              <Button variant="primary">Sign In / Register</Button>
            </Link>
          </Nav>
        </Container>
      </Navbar>

      {/* ✅ Offcanvas Sidebar Menu */}
      <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Link href="/" className="nav-link" onClick={() => setShowOffcanvas(false)}>Home</Link>
            <Link href="/popular-destinations" className="nav-link" onClick={() => setShowOffcanvas(false)}>Destinations</Link>
            <Link href="/blog" className="nav-link" onClick={() => setShowOffcanvas(false)}>Blog</Link>
            <Link href="/about" className="nav-link" onClick={() => setShowOffcanvas(false)}>About Us</Link>
            <Link href="/dashboard" className="nav-link" onClick={() => setShowOffcanvas(false)}>Dashboard</Link>
            <Link href="/contact" className="nav-link" onClick={() => setShowOffcanvas(false)}>Contact</Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      {/* ✅ Internal CSS for Mobile Responsive Adjustments */}
      <style jsx>{`
        @media (max-width: 991px) {
          .sign-in-btn {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default CustomNavbar;
