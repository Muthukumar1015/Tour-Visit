"use client";

import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";

const destinations = [
  { id: 1, name: "New York", img: "/images/ny.jpg" },
  { id: 2, name: "London", img: "/images/london.jpg" },
  { id: 3, name: "Barcelona", img: "/images/barcelona.jpg" },
  { id: 4, name: "Sydney", img: "/images/sydney.jpg" },
  { id: 5, name: "Rome", img: "/images/rome.jpg" },
];

export default function PopularDestinations() {
  return (
    <>
      <Head>
        <title>Popular Destinations - Travel</title>
        <meta name="description" content="Explore popular travel destinations." />
      </Head>

      <section className="popular-destinations py-5">
        <div className="container">
          {/* 🔥 Centered Title with Effect */}
          <div className="text-center mb-4">
            <h2 className="section-heading">Popular Destinations</h2>
            <p className="text-muted">These popular destinations have a lot to offer</p>
          </div>

          {/* 🔥 Infinite Scrolling Carousel */}
          <div className="slider-container">
            <div className="slider">
              {[...destinations, ...destinations].map((destination, index) => (
                <div className="card" key={index}>
                  <img src={destination.img} alt={destination.name} className="card-img" />
                  <h3 className="card-title">{destination.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* 🔥 Styled Section Heading */
        .section-heading {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(90deg, #007cf0, #00dfd8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
          position: relative;
          margin-bottom: 0.5rem;
        }

        .section-heading::after {
          content: "";
          width: 60%;
          height: 4px;
          background: #00dfd8;
          position: absolute;
          left: 20%;
          bottom: -8px;
          border-radius: 5px;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { opacity: 0.5; transform: scaleX(1); }
          50% { opacity: 1; transform: scaleX(1.1); }
          100% { opacity: 0.5; transform: scaleX(1); }
        }

        /* 🔥 Infinite Scrolling Effect */
        .slider-container {
          overflow: hidden;
          width: 100%;
          position: relative;
          padding: 20px 0;
          white-space: nowrap;
        }

        .slider {
          display: flex;
          gap: 15px;
          width: max-content;
          animation: scroll 20s linear infinite;
        }

        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        /* 🔥 Destination Cards */
        .card {
          min-width: 220px;
          max-width: 250px;
          height: 300px;
          border-radius: 10px;
          overflow: hidden;
          flex-shrink: 0;
          position: relative;
          transition: transform 0.3s ease-in-out;
        }

        .card:hover {
          transform: scale(1.05);
        }

        .card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-title {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          color: white;
          font-size: 16px;
          font-weight: bold;
          background: rgba(0, 0, 0, 0.6);
          padding: 5px 10px;
          border-radius: 5px;
        }

        /* 🔥 Mobile Responsive Fixes */
        @media (max-width: 768px) {
          .slider {
            animation: scroll 15s linear infinite;
          }
          
          .section-heading {
            font-size: 2rem;
          }

          .card {
            min-width: 180px;
            max-width: 200px;
            height: 260px;
          }

          .card-title {
            font-size: 14px;
            padding: 3px 8px;
          }
        }

        @media (max-width: 480px) {
          .section-heading {
            font-size: 1.8rem;
          }

          .card {
            min-width: 160px;
            max-width: 180px;
            height: 220px;
          }

          .card-title {
            font-size: 12px;
            padding: 2px 6px;
          }
        }
      `}</style>
    </>
  );
}
