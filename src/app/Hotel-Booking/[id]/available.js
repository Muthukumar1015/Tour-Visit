'use client';

import { useState } from "react";
import { Container, Row, Col, Card, Button, Table } from "react-bootstrap";
import { FaWifi, FaSmokingBan, FaParking, FaUtensils, FaUsers } from "react-icons/fa";

// Sample room data
const rooms = [
  {
    id: 1,
    image: "/images/type1.jpg",
    price: 68,
    sleeps: 2,
    benefits: [
      "Pay at the hotel",
      "Pay nothing until March 30, 2025",
      "Free cancellation before April 1, 2025",
    ],
  },
  {
    id: 2,
    image: "/images/type2.jpg",
    price: 68,
    sleeps: 2,
    benefits: [
      "Pay at the hotel",
      "Pay nothing until March 30, 2025",
      "Free cancellation before April 1, 2025",
    ],
  },
  {
    id: 3,
    image: "/images/type3.jpg",
    price: 68,
    sleeps: 2,
    benefits: [
      "Pay at the hotel",
      "Pay nothing until March 30, 2025",
      "Free cancellation before April 1, 2025",
    ],
  },
];

export default function AvailableRooms() {
  const [selectedRooms, setSelectedRooms] = useState({});

  const handleRoomSelection = (roomId, quantity) => {
    setSelectedRooms((prev) => ({ ...prev, [roomId]: quantity }));
  };

  const totalRooms = Object.values(selectedRooms).reduce((sum, num) => sum + num, 0);
  const totalPrice = totalRooms * 68; // Assuming $68 per night

  return (
    <Container className="mt-5">
      {/* Stylish Heading with Effects */}
      <h2
        className="text-center fw-bold display-5 mb-4"
        style={{
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
          background: "linear-gradient(to right, #007bff, #6610f2)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          borderBottom: "4px solid #6610f2",
          display: "inline-block",
          paddingBottom: "5px",
          animation: "fadeIn 1.5s ease-in-out",
          
        }}
      >
        Available Rooms
      </h2>

      <Row className="justify-content-center">
        {/* Left Side - Room Selection Table (75%) */}
        <Col md={8}>
          <Card className="p-4 shadow-lg border-0">
            <h4 className="fw-bold">Standard Twin Room</h4>

            {/* Table Header */}
            <Table responsive bordered className="mt-3">
              <thead className="bg-primary text-white text-center">
                <tr>
                  <th>Room Type</th>
                  <th>Benefits</th>
                  <th>Sleeps</th>
                  <th>Price for 5 nights</th>
                  <th>Select Rooms</th>
                </tr>
              </thead>
              <tbody>
                {rooms.map((room) => (
                  <tr key={room.id} className="align-middle hover-effect">
                    {/* Room Image */}
                    <td>
                      <img
                        src={room.image}
                        alt="Room"
                        className="img-fluid rounded shadow-lg"
                        style={{ maxWidth: "120px" }}
                      />
                    </td>

                    {/* Benefits List */}
                    <td>
                      <ul className="list-unstyled">
                        {room.benefits.map((benefit, index) => (
                          <li key={index} className="text-success">✔ {benefit}</li>
                        ))}
                      </ul>
                      <div className="d-flex gap-2">
                        <span><FaSmokingBan /> Non-smoking</span>
                        <span><FaWifi /> Free WiFi</span>
                        <span><FaParking /> Parking</span>
                        <span><FaUtensils /> Kitchen</span>
                      </div>
                    </td>

                    {/* Sleeps Icon */}
                    <td className="text-center">
                      <FaUsers size={24} /> {room.sleeps}
                    </td>

                    {/* Price */}
                    <td className="text-center fw-bold text-primary">
                      US${room.price} <br />
                      <small className="text-muted">Includes taxes</small>
                    </td>

                    {/* Room Selection */}
                    <td className="text-center">
                      <select
                        className="form-select"
                        onChange={(e) => handleRoomSelection(room.id, parseInt(e.target.value))}
                      >
                        <option value="0">0</option>
                        <option value="1">1 (US$ {room.price * 5})</option>
                        <option value="2">2 (US$ {room.price * 10})</option>
                        <option value="3">3 (US$ {room.price * 15})</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Col>

        {/* Right Side - Booking Summary (25%) */}
        <Col md={4}>
          <Card className="p-4 shadow-lg border-0 text-center">
            <h4 className="fw-bold"> {totalRooms} rooms for </h4>
            <h3 className="fw-bold text-primary">US${totalPrice}</h3>

            <Button variant="primary" className="w-100 mt-3">
              Reserve <i className="ms-2 bi bi-arrow-right"></i>
            </Button>

            <div className="mt-3 text-muted">
              <p>✔ Confirmation is immediate</p>
              <p>✔ No registration required</p>
              <p>✔ No booking or credit card fees!</p>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Hover Effect Styles */}
      <style jsx>{`
        .hover-effect:hover {
          background-color: #f8f9fa;
          transition: all 0.3s ease-in-out;
          box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Container>
  );
}
