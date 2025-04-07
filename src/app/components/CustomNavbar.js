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
  const [animateClose, setAnimateClose] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarBg(window.scrollY > 50 ? "white" : "transparent");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = () => {
    setAnimateClose(true);
    setTimeout(() => {
      setShowOffcanvas(false);
      setAnimateClose(false);
    }, 400);
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="fixed-top d-flex justify-content-between"
        style={{
          transition: "background-color 0.3s ease",
          backgroundColor: navbarBg,
          boxShadow: navbarBg === "white" ? "0 4px 10px rgba(0,0,0,0.1)" : "none",
          padding: "10px 20px",
        }}
      >
        <Container className="d-flex align-items-center" style={{ position: "relative" }}>
          {/* Left - Hamburger */}
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
              cursor: "pointer",
            }}
          >
            <span style={{ width: "30px", height: "3px", backgroundColor: "#000", borderRadius: "2px" }}></span>
            <span style={{ width: "20px", height: "3px", backgroundColor: "#000", borderRadius: "2px" }}></span>
          </button>

          {/* Center - Logo */}
          <Navbar.Brand as={Link} href="/" style={{ margin: "0 auto" }}>
            <img src="/images/logo-dark.svg" alt="Logo" style={{ width: "100px", height: "auto" }} />
          </Navbar.Brand>

          {/* Right - Sign In */}
          <Nav className="sign-in-btn" style={{ display: "block" }}>
            <Link href="/auth/login" passHref>
              <Button variant="primary">Sign In / Register</Button>
            </Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Offcanvas with Animation */}
      {showOffcanvas && (
        <Offcanvas
          show={true}
          onHide={handleClose}
          placement="top"
          className={animateClose ? "slide-from-center-out" : "slide-from-top-center"}
          backdropClassName="offcanvas-backdrop-fade"
          style={{
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Offcanvas.Header closeButton onClick={handleClose}>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="d-flex flex-column align-items-center justify-content-center">
            <Nav className="flex-column text-center">
              <Link href="/" className="nav-link" onClick={handleClose}>Home</Link>
              <Link href="/popular-destinations" className="nav-link" onClick={handleClose}>Destinations</Link>
              <Link href="/blog" className="nav-link" onClick={handleClose}>Blog</Link>
              <Link href="/about" className="nav-link" onClick={handleClose}>About Us</Link>
              <Link href="/dashboard" className="nav-link" onClick={handleClose}>Dashboard</Link>
              <Link href="/contact" className="nav-link" onClick={handleClose}>Contact</Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      )}

      {/* ✅ Internal CSS */}
      <style jsx global>{`
        @media (max-width: 991px) {
          .sign-in-btn {
            display: none;
          }
        }

        @keyframes fromTopToCenter {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fromCenterToBottom {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }

        .offcanvas.slide-from-top-center {
          animation: fromTopToCenter 0.4s ease-out forwards;
        }

        .offcanvas.slide-from-center-out {
          animation: fromCenterToBottom 0.4s ease-in forwards;
        }

        .offcanvas-backdrop-fade {
          opacity: 0.5 !important;
          transition: opacity 0.4s ease;
        }
      `}</style>
    </>
  );
};

export default CustomNavbar;
