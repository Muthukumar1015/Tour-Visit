"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const recommendedItems = [
  { id: 1, title: "The Montcalm At Brewery London City", location: "London", img: "/images/room1.png", price: "$72", rating: 4.7 },
  { id: 2, title: "Staycity Aparthotels Deptford Bridge Station", location: "Barcelona", img: "/images/room2.png", price: "$85", rating: 4.8 },
  { id: 3, title: "The Westin New York at Times Square West", location: "New York", img: "/images/room3.png", price: "$68", rating: 4.7 },
  { id: 4, title: "DoubleTree by Hilton Hotel New York Times Square West", location: "Rome", img: "/images/room4.png", price: "$89", rating: 4.5 },
  { id: 5, title: "Hotel California", location: "Los Angeles", img: "/images/room5.png", price: "$95", rating: 4.6 },
  { id: 6, title: "Santorini Paradise", location: "Santorini", img: "/images/room6.png", price: "$120", rating: 4.9 },
  { id: 7, title: "Paris Luxury Stay", location: "Paris", img: "/images/room7.png", price: "$110", rating: 4.7 },
  { id: 8, title: "Dubai Skyline Hotel", location: "Dubai", img: "/images/room8.png", price: "$130", rating: 4.8 },
];

export default function Recommended() {
  const [startIndex, setStartIndex] = useState(0);
  const router = useRouter();
  const itemsPerView = 4;

  const nextImage = () => {
    if (startIndex < recommendedItems.length - itemsPerView) {
      setStartIndex((prevIndex) => Math.min(prevIndex + 1, recommendedItems.length - itemsPerView));
    }
  };

  const prevImage = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
  };

  return (
    <section className="recommended py-5">
      <div className="container">
        {/* Section Title and Navigation Arrows */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="section-title">Recommended</h2>
          <div className="navigation-arrows">
            <FaChevronLeft className="arrow-icon" onClick={prevImage} />
            <FaChevronRight className="arrow-icon" onClick={nextImage} />
          </div>
        </div>

        {/* Image Slider with Smooth Transition */}
        <div className="slider-container">
          <div
            className="slider"
            style={{ transform: `translateX(-${startIndex * (100 / itemsPerView)}%)` }}
          >
            {recommendedItems.map((item) => (
              <div className="card recommended-card" key={item.id}>
                {/* Select Room Button */}
                <button
                  className="btn btn-primary btn-sm select-room-btn"
                  onClick={() => router.push(`/Hotel-Booking/${item.id}`)}
                >
                  Select Room
                </button>

                <img src={item.img} alt={item.title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-location">{item.location}</p>
                  <p className="card-price">
                    Starting from <span>{item.price}</span>
                  </p>
                  <p className="card-rating">⭐ {item.rating}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .section-title {
          font-size: 1.8rem;
          font-weight: bold;
        }

        .slider-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .slider {
          display: flex;
          gap: 15px;
          transition: transform 0.5s ease-in-out; /* Smooth Slide Effect */
        }

        .recommended-card {
          cursor: pointer;
          min-width: 25%;
          max-width: 25%;
          transition: transform 0.3s ease-in-out;
          position: relative;
          border-radius: 10px;
          overflow: hidden;
        }

        .recommended-card:hover {
          transform: scale(1.05);
        }

        .recommended-card .card-title {
          font-size: 1rem;
          font-weight: bold;
          text-transform: capitalize;
          transition: text-decoration 0.3s;
        }

        .recommended-card .card-title:hover {
          text-decoration: underline;
        }

        .card-location {
          font-size: 0.9rem;
          color: gray;
        }

        .card-price {
          font-weight: bold;
          font-size: 1rem;
          color: #007bff;
        }

        .card-rating {
          font-size: 0.9rem;
          color: #ffa500;
        }

        .navigation-arrows {
          display: flex;
          gap: 15px;
        }

        .arrow-icon {
          font-size: 24px;
          cursor: pointer;
          transition: color 0.3s;
        }

        .arrow-icon:hover {
          color: #007bff;
        }

        /* Positioning the Select Room Button */
        .select-room-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 0.8rem;
          padding: 5px 10px;
          border-radius: 5px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .recommended-card {
            min-width: 50%;
            max-width: 50%;
          }
        }

        @media (max-width: 480px) {
          .recommended-card {
            min-width: 100%;
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
