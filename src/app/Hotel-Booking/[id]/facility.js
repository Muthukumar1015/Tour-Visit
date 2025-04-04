import Head from 'next/head';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

export default function Facilities() {
  return (
    <>
      <Head>
        <title>Luxury Hotel Facilities | 5-Star Amenities</title>
        <meta name="description" content="Discover world-class facilities including fine dining, spa, security, and premium suites at our luxury hotel." />
        <meta name="keywords" content="luxury hotel, 5-star amenities, spa, fine dining, premium stay, exclusive suites" />
      </Head>

      {/* Hero Section */}
     

      <Container className="mt-5">
        <h2 className="text-center fw-bold mb-4">🏨 Our Premium Facilities</h2>

        <Row className="g-4">
          {[
            { title: '🛁 Bathroom', items: ['Luxury Towels', 'Jacuzzi', 'Private Spa', 'Designer Toiletries', 'Rain Shower'], color: 'info' },
            { title: '🛏️ Bedroom', items: ['King-Size Bed', 'Elegant Decor', 'Pillow Menu', 'Smart Lighting', 'Exclusive Suite'], color: 'primary' },
            { title: '🍽️ Fine Dining', items: ['Gourmet Meals', 'Michelin Star Chefs', 'Wine Selection', '24/7 Room Service'], color: 'warning' },
            { title: '🛎 Reception Services', items: ['Concierge', 'Express Check-in', 'VIP Lounge', '24/7 Assistance'], color: 'success' },
            { title: '📺 Entertainment', items: ['65-inch 4K TV', 'Dolby Sound System', 'Netflix & Prime Access'], color: 'danger' },
            { title: '🧹 Housekeeping', items: ['Daily Cleaning', 'Laundry Service', 'Butler on Request'], color: 'secondary' },
            { title: '🛡️ Security', items: ['24/7 Surveillance', 'Private Security', 'Biometric Access'], color: 'dark' },
            { title: '🏋️‍♂️ Wellness', items: ['Spa & Sauna', 'Infinity Pool', 'State-of-the-Art Gym', 'Yoga Sessions'], color: 'danger' },
          ].map((facility, index) => (
            <Col md={4} key={index}>
              <Card className="shadow-lg border-0 h-100">
                <Card.Body>
                  <h4 className="fw-bold text-center">
                    <Badge bg={facility.color}>{facility.title}</Badge>
                  </h4>
                  <ul className="list-unstyled mt-3">
                    {facility.items.map((item, idx) => (
                      <li key={idx} className="mb-2">
                        ✅ {item}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Health & Safety Section */}
        <div className="alert alert-danger text-center mt-5">
          <h3>❤️ Health & Safety First</h3>
          <p>We prioritize your well-being with world-class hygiene and security measures.</p>
        </div>
      </Container>

    </>
  );
}
