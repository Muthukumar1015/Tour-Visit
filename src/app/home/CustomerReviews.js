"use client";

import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomerReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const testimonials = [
    {
      id: 1,
      name: "Annette Black",
      role: "UX / UI Designer",
      review:
        "Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic.",
      location: "Hotel Equatorial Melaka",
      image: "/images/customer1.png",
    },
    {
      id: 2,
      name: "John Doe",
      role: "Software Engineer",
      review:
        "The experience was amazing! The hotel was centrally located and made our vacation stress-free. Would definitely book again!",
      location: "Grand Plaza Tokyo",
      image: "/images/customer2.png",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "Travel Blogger",
      review:
        "This was one of the best trips we've had! The hotel service was excellent and the amenities were top-notch. Highly recommend!",
      location: "Paradise Resort Bali",
      image: "/images/customer3.png",
    },
  ];

  return (
    <>
      <Head>
        <title>Customer Reviews | Best Travel Experiences</title>
        <meta
          name="description"
          content="Read what our happy customers have to say about their amazing travel experiences with us. Best hotels, easy booking & top-notch service!"
        />
      </Head>

      <section className="review-section position-relative py-5 text-dark">
        {/* Floating Avatars as Background Image */}
        <div className="floating-avatars"></div>

        <div className="container text-center">
          <h2 className="fw-bold">Customer Reviews</h2>
          <p className="text-muted">Interdum et malesuada fames ac ante ipsum</p>

          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="position-relative review-slider">
                <Slider {...settings}>
                  {testimonials.map((testimonial) => (
                    <article key={testimonial.id} className="text-center">
                      <figure className="d-flex justify-content-center">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="rounded-circle border border-dark p-1"
                        />
                      </figure>
                      <h5 className="mt-3 text-primary">{testimonial.location}</h5>
                      <blockquote className="fst-italic px-3">
                        "{testimonial.review}"
                      </blockquote>
                      <figcaption className="fw-bold">{testimonial.name}</figcaption>
                      <p className="text-muted">{testimonial.role}</p>
                    </article>
                  ))}
                </Slider>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Avatar Styles */}
      <style jsx>{`
        .review-section {
          position: relative;
          background-image: url("/images/bg.png");
          background-size: cover;
          background-position: center;
        }

        .floating-avatars {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          background-image: url("/images/avatar-bg.png");
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }

        .review-slider {
          position: relative;
          z-index: 2;
        }

        @media (max-width: 768px) {
          .floating-avatars {
            background-size: cover;
          }
        }
      `}</style>
    </>
  );
};

export default CustomerReviews;
