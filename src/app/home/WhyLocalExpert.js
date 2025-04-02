"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaShieldAlt, FaLaptop, FaHeadset } from "react-icons/fa";

const WhyLocalExpert = () => {
  const features = [
    {
      icon: <FaShieldAlt size={30} className="text-primary" />,
      title: "Best Price Guarantee",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <FaLaptop size={30} className="text-primary" />,
      title: "Easy & Quick Booking",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <FaHeadset size={30} className="text-primary" />,
      title: "Customer Care 24/7",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <Container fluid className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          {/* Left Section */}
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold">Why be a Local Expert</h2>
            <p className="text-muted">These popular destinations have a lot to offer</p>
            {features.map((feature, index) => (
              <div key={index} className="d-flex align-items-start mt-3">
                <div className="me-3">{feature.icon}</div>
                <div>
                  <h5 className="fw-bold">{feature.title}</h5>
                  <p className="text-muted small">{feature.description}</p>
                </div>
              </div>
            ))}
          </Col>

          {/* Right Image */}
          <Col md={6} className="text-center">
            <img
              src="/images/campfire.webp"
              alt="Camping"
              className="img-fluid rounded"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default WhyLocalExpert;
