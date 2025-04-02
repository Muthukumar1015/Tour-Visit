"use client";

import { useState } from "react";
import { Container, Row, Col, Form, Button, Dropdown } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MostPopularTours from "@/app/home/MostPopularTours";
import ChooseTourTypes from "@/app/home/ChooseTourTypes";
import ExploreHotLocations from "@/app/home/ExploreHotLocations";
import DealsAndDiscounts from "@/app/home/DealsAndDiscounts";
import WhyLocalExpert from "./WhyLocalExpert";
import CustomerReviews from "./CustomerReviews";


export default function HomePage() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [location, setLocation] = useState("");

  const [guestDetails, setGuestDetails] = useState({
    adults: 2,
    children: 1,
    rooms: 1,
  });

  const locations = [
    { name: "London", country: "United Kingdom" },
    { name: "New York", country: "United States" },
    { name: "Paris", country: "France" },
    { name: "Madrid", country: "Spain" },
    { name: "Santorini", country: "Greece" },
  ];

  const styles = {
    formBox: {
      background: "white",
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
      borderRadius: "15px",
      padding: "20px",
      width: "90%",
      maxWidth: "1100px",
      position: "absolute",
      bottom: "1%",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 10,
    },
    formInput: {
      width: "100%",
      border: "1px solid #ccc",
      padding: "12px 16px",
      borderRadius: "8px",
      fontSize: "16px",
    },
    searchButton: {
      background: "#0056ff",
      color: "white",
      fontWeight: "bold",
      padding: "14px",
      borderRadius: "8px",
      border: "none",
      fontSize: "18px",
      width: "100%",
    },
    counterButton: {
      margin: "0 5px",
      fontSize: "18px",
    },
  };

  return (
    <>
      <Container fluid className="vh-100 d-flex align-items-center position-relative">
        <Row className="w-100 h-100 align-items-center">
          {/* Left Content */}
          <Col
            lg={6}
            className="d-flex flex-column justify-content-center px-4 text-dark text-center text-lg-start"
            style={{
              backgroundImage: 'url("/images/bg2.svg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "100vh",
            }}
          >
            <h1 className="display-6 fw-bold">
              Best Travel{" "}
              <span className="text-primary position-relative">
                Experience
                <span
                  style={{
                    display: "block",
                    height: "3px",
                    width: "100%",
                    backgroundColor: "#0056ff",
                   
                  }}
                ></span>
              </span>
            </h1>
            <p className="mt-2 fw-bold text-dark" style={{ fontSize: "18px" }}>
              Discover exciting tours, travel packages, and hotel reservations.
            </p>
          </Col>

          {/* Right Background Image */}
          <Col
            lg={6}
            className="d-none d-lg-block position-relative"
            style={{
              backgroundImage: 'url("/images/travel-bg.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "100vh",
            }}
          />

          {/* Form Box */}
          <div className="container-fluid" style={styles.formBox}>
            <Row className="w-100">
              {/* Location */}
              <Col xs={12} className="mb-3">
                <Form.Group controlId="location">
                  <Form.Label className="fw-bold">Location</Form.Label>
                  <Dropdown>
                    <Dropdown.Toggle variant="light" style={styles.formInput}>
                      {location || "Where are you going?"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="w-100">
                      {locations.map((loc, index) => (
                        <Dropdown.Item key={index} onClick={() => setLocation(loc.name)}>
                          <div className="d-flex flex-column">
                            <span className="fw-bold">{loc.name}</span>
                            <span className="text-muted">{loc.country}</span>
                          </div>
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Form.Group>
              </Col>

              {/* Date Picker */}
              <Col xs={12} className="mb-3">
                <Form.Group controlId="checkin">
                  <Form.Label className="fw-bold">Check in - Check out</Form.Label>
                  <DatePicker
  selectsRange={true}
  startDate={startDate}
  endDate={endDate}
  onChange={(update) => setDateRange(update)}
  isClearable={true}
  placeholderText="Select Dates"
  className="form-control"
  style={{ ...styles.formInput, height: "45px" }} // 👈 Same height as other inputs
/>

                </Form.Group>
              </Col>

              {/* Guests & Rooms */}
              <Col xs={12} className="mb-3">
                <Form.Group controlId="guests">
                  <Form.Label className="fw-bold">Guests</Form.Label>
                  <Dropdown>
                    <Dropdown.Toggle variant="light" style={styles.formInput}>
                      {`${guestDetails.adults} adults - ${guestDetails.children} children - ${guestDetails.rooms} rooms`}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="guest-dropdown w-100 p-3">
                      {/* Adults */}
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span>Adults</span>
                        <div>
                          <Button
                            variant="outline-primary"
                            style={styles.counterButton}
                            onClick={() =>
                              setGuestDetails((prev) => ({
                                ...prev,
                                adults: Math.max(1, prev.adults - 1),
                              }))
                            }
                          >
                            -
                          </Button>
                          <span className="mx-2">{guestDetails.adults}</span>
                          <Button
                            variant="outline-primary"
                            style={styles.counterButton}
                            onClick={() =>
                              setGuestDetails((prev) => ({ ...prev, adults: prev.adults + 1 }))
                            }
                          >
                            +
                          </Button>
                        </div>
                      </div>

                      {/* Children */}
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span>Children</span>
                        <div>
                          <Button
                            variant="outline-primary"
                            style={styles.counterButton}
                            onClick={() =>
                              setGuestDetails((prev) => ({
                                ...prev,
                                children: Math.max(0, prev.children - 1),
                              }))
                            }
                          >
                            -
                          </Button>
                          <span className="mx-2">{guestDetails.children}</span>
                          <Button
                            variant="outline-primary"
                            style={styles.counterButton}
                            onClick={() =>
                              setGuestDetails((prev) => ({
                                ...prev,
                                children: prev.children + 1,
                              }))
                            }
                          >
                            +
                          </Button>
                        </div>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </Form.Group>
              </Col>

              {/* Search Button */}
              <Col xs={12} className="text-center mt-3">
                <Button style={styles.searchButton}>🔍 Search</Button>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>

      {/* ✅ Most Popular Tours Section */}
      <MostPopularTours />
      <ChooseTourTypes />
      <ExploreHotLocations />
      < DealsAndDiscounts />
      < WhyLocalExpert />
      < CustomerReviews />
    </>
  );
}
