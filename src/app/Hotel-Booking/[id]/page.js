'use client';

import Head from 'next/head';
import { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { 
  FaCity, FaShuttleVan, FaConciergeBell, FaTv, 
  FaWifi, FaSmokingBan, FaParking, FaUtensils, FaShieldAlt 
} from 'react-icons/fa';
import AvailableRooms from '@/app/Hotel-Booking/[id]/available'; // Ensure this path is correct
import Facilities from '@/app/Hotel-Booking/[id]/facility';

// Define image files
const hotelImages = [
  '/images/part1.png',
  '/images/part2.png',
  '/images/part3.png',
  '/images/part4.jpg'
];

export default function HotelDetails() {
  const [mainImage, setMainImage] = useState(hotelImages[0]);

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Luxury Stay | Best Hotel in London</title>
        <meta name="description" content="Book a luxury stay in London with premium facilities and best prices." />
        <meta name="keywords" content="hotel booking, London hotels, luxury stay, best hotels, free WiFi, 24-hour service" />
        <meta property="og:title" content="Luxury Stay | Best Hotel in London" />
        <meta property="og:description" content="Book now and enjoy an exclusive stay in London with premium facilities and great offers." />
        <meta property="og:image" content="/hotel-preview.jpg" />
      </Head>

      <Container className="py-5">
        {/* Main Image Display */}
        <div className="text-center mb-4">
          <img 
            src={mainImage} 
            alt="Main hotel" 
            className="img-fluid w-60 shadow rounded" 
            style={{ maxHeight: '400px', objectFit: 'cover',marginTop : '5%' }} 
          />
        </div>

        {/* Thumbnail Gallery */}
        <Row className="g-2 text-center">
          {hotelImages.map((img, index) => (
            <Col xs={6} md={3} key={index}>
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="img-fluid rounded shadow"
                style={{ cursor: 'pointer' }}
                onClick={() => setMainImage(img)}
              />
            </Col>
          ))}
        </Row>

        {/* Property Highlights */}
        <h2 className="fw-bold mt-5">Property Highlights</h2>
        <Row className="text-center g-3 mt-5">
          <Col><FaCity size={30} /> <p>In London City Centre</p></Col>
          <Col><FaShuttleVan size={30} /> <p>Airport Transfer</p></Col>
          <Col><FaConciergeBell size={30} /> <p>24-hour Front Desk</p></Col>
          <Col><FaTv size={30} /> <p>Premium TV Channels</p></Col>
        </Row>

        {/* Overview */}
        <h3 className="fw-semibold mt-5">Overview</h3>
        <p className="mt-3">You can book directly for the best price. The property features a comfortable 2-room terraced house with cozy furnishings.</p>

        {/* Popular Facilities */}
        <h3 className="fw-semibold mt-5">Most Popular Facilities</h3>
        <Row className="text-center g-3 mt-5">
          <Col><FaSmokingBan size={30} /> <p>Non-smoking Rooms</p></Col>
          <Col><FaParking size={30} /> <p>Parking</p></Col>
          <Col><FaUtensils size={30} /> <p>Kitchen</p></Col>
          <Col><FaWifi size={30} /> <p>Free WiFi</p></Col>
          <Col><FaShieldAlt size={30} /> <p>Safety & Security</p></Col>
        </Row>


        {/* Available Rooms Section */}
        <AvailableRooms />
        <Facilities />
      </Container>
    </>
  );
}
