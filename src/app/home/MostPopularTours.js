import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const tours = [
  {
    id: 1,
    title: "Stonehenge, Windsor Castle and Bath with Pub Lunch in Lacock",
    location: "Westminster Borough, London",
    duration: "16+ hours",
    category: "Full-day Tours",
    price: "US$72",
    reviews: "3014 reviews",
    rating: 5,
    image: "/images/tour1.webp",
    tag: "LIKELY TO SELL OUT",
  },
  {
    id: 2,
    title: "Westminster Walking Tour & Westminster Abbey Entry",
    location: "Ciutat Vella, Barcelona",
    duration: "14+ hours",
    category: "Attractions & Museums",
    price: "US$65",
    reviews: "2045 reviews",
    rating: 5,
    image: "/images/tour2.webp",
    tag: "",
  },
  {
    id: 3,
    title: "High-Speed Thames River RIB Cruise in London",
    location: "Manhattan, New York",
    duration: "18+ hours",
    category: "Private and Luxury",
    price: "US$87",
    reviews: "2163 reviews",
    rating: 5,
    image: "/images/tour3.webp",
    tag: "BEST SELLER",
  },
  {
    id: 4,
    title: "Edinburgh Darkside Walking Tour: Mysteries, Murder and Legends",
    location: "Vaticano Prati, Rome",
    duration: "20+ hours",
    category: "Bus Tours",
    price: "US$99",
    reviews: "1458 reviews",
    rating: 5,
    image: "/images/tour4.png",
    tag: "TOP RATED",
  },
];

export default function MostPopularTours() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Container className="mt-5">
      {/* SEO-friendly Header */}
      <h2 className="fw-bold" style={{ fontSize: "28px" }}>Most Popular Tours</h2>
      <p className="text-muted" style={{ fontSize: "16px" }}>
        Discover top-rated tours and attractions from around the world.
      </p>

      {/* Schema Markup for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": tours.map((tour, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": tour.title,
            "image": tour.image,
            "url": "#",
            "review": {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": tour.rating,
              },
              "author": {
                "@type": "Person",
                "name": "Verified User"
              }
            },
          })),
        })}
      </script>

      <Slider {...settings} className="mt-4">
        {tours.map((tour) => (
          <Card key={tour.id} className="border-0 shadow-sm mx-2">
            <div className="position-relative">
              <Card.Img
                variant="top"
                src={tour.image}
                alt={tour.title}  // ✅ SEO-friendly alt text
                style={{ height: "auto", maxHeight: "250px", objectFit: "cover" }}
              />
              {tour.tag && (
                <span className="badge bg-primary position-absolute top-0 start-0 m-2">
                  {tour.tag}
                </span>
              )}
              <Button variant="light" className="position-absolute top-0 end-0 m-2 border-0">
                <BsHeart size={20} />
              </Button>
            </div>
            <Card.Body>
              <small className="text-muted">
                {tour.duration} · {tour.category}
              </small>
              <Card.Title className="mt-2" style={{ fontSize: "16px" }}>
                {tour.title}
              </Card.Title>
              <p className="text-muted" style={{ fontSize: "14px" }}>
                {tour.location}
              </p>
              <div className="d-flex align-items-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} color="#FFC107" size={14} />
                ))}
                <span className="ms-2 text-muted">{tour.reviews}</span>
              </div>
              <p className="mt-2 fw-bold">From {tour.price}</p>
            </Card.Body>
          </Card>
        ))}
      </Slider>
    </Container>
  );
}
