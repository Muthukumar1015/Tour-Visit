"use client";

import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DealsAndDiscounts = () => {
  // Slider Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  // Tour Data
  const tours = [
    {
      id: 1,
      title: "Stonehenge, Windsor Castle and Bath",
      duration: "16+ hours",
      type: "Full-day Tours",
      location: "Westminster, London",
      price: "$72",
      reviews: 3201,
      image: "/images/tour1.webp",
      badge: "TOP RATED",
    },
    {
      id: 2,
      title: "Westminster Walking Tour & Abbey Entry",
      duration: "14+ hours",
      type: "Attractions & Museums",
      location: "Barcelona",
      price: "$65",
      reviews: 2890,
      image: "/images/tour2.webp",
      badge: "TOP RATED",
    },
    {
      id: 3,
      title: "High-Speed Thames River RIB Cruise",
      duration: "18+ hours",
      type: "Private & Luxury",
      location: "New York",
      price: "$87",
      reviews: 3104,
      image: "/images/tour3.webp",
      badge: "TOP RATED",
    },
    {
      id: 4,
      title: "Grand Canyon Helicopter Tour",
      duration: "12+ hours",
      type: "Adventure Tours",
      location: "Las Vegas",
      price: "$150",
      reviews: 2956,
      image: "/images/tour4.png",
      badge: "TOP RATED",
    },
    {
      id: 5,
      title: "Disneyland Paris Tickets & Fast Pass",
      duration: "Full-day",
      type: "Theme Park",
      location: "Paris",
      price: "$120",
      reviews: 5002,
      image: "/images/tour5.webp",
      badge: "LIKELY TO SELL OUT*",
    },
  ];

  let sliderRef = React.useRef(null);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold">Deals & Discounts</h2>
            <p className="text-muted">Interdum et malesuada fames ac ante ipsum</p>
          </div>
          <div className="d-flex gap-3">
            <FaArrowLeft className="cursor-pointer fs-4" onClick={() => sliderRef.slickPrev()} />
            <FaArrowRight className="cursor-pointer fs-4" onClick={() => sliderRef.slickNext()} />
          </div>
        </div>

        <div className="row">
          {/* Left Promo Banner */}
          <div className="col-lg-4">
            <div className="p-4 text-white rounded" style={{ background: "url('/images/trip-banner.png') center/cover", minHeight: "500px" }}>
              <h3 className="text-uppercase">Enjoy Summer Deals</h3>
              <h2 className="fw-bold">Book Early to Save</h2>
              <button className="btn btn-primary mt-3">Book Now</button>
            </div>
          </div>

          {/* Right Slider */}
          <div className="col-lg-8">
            <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
              {tours.map((tour) => (
                <div key={tour.id} className="p-2">
                  <div className="card shadow-sm">
                    {tour.badge && (
                      <span
                        className={`badge position-absolute m-2 ${
                          tour.badge === "LIKELY TO SELL OUT*" ? "bg-danger" : "bg-primary"
                        }`}
                      >
                        {tour.badge}
                      </span>
                    )}
                    <img src={tour.image} className="card-img-top" alt={tour.title} />
                    <div className="card-body">
                      <p className="text-muted small">{tour.duration} • {tour.type}</p>
                      <h5 className="fw-bold">{tour.title}</h5>
                      <p className="text-muted">{tour.location}</p>
                      <p className="text-primary fw-bold">From US{tour.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Statistics */}
        <div className="row text-center mt-5">
          <div className="col-md-3">
            <h3 className="fw-bold">4,958</h3>
            <p className="text-muted">Destinations</p>
          </div>
          <div className="col-md-3">
            <h3 className="fw-bold">2,869</h3>
            <p className="text-muted">Total Properties</p>
          </div>
          <div className="col-md-3">
            <h3 className="fw-bold">2M</h3>
            <p className="text-muted">Happy Customers</p>
          </div>
          <div className="col-md-3">
            <h3 className="fw-bold">574,974</h3>
            <p className="text-muted">Our Volunteers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsAndDiscounts;
