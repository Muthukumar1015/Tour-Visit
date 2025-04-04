import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

const travelOffers = [
  {
    title: "Things To Do On Your Trip",
    img: "/images/trip.jpg",
  },
  {
    title: "Up to 70% Discount!",
    subtitle: "Enjoy Summer Deals",
    img: "/images/discount.jpg",
  },
];

export default function TravelOffers() {
  return (
    <section className="travel-offers py-5">
      <div className="container">
        <div className="row g-4">
          {travelOffers.map((offer, index) => (
            <div className="col-md-6" key={index}>
              <div className="offer-card">
                <img src={offer.img} alt={offer.title} className="offer-img" />
                <div className="offer-overlay">
                  {offer.subtitle && <p className="offer-subtitle">{offer.subtitle}</p>}
                  <h2 className="offer-title">{offer.title}</h2>
                  <button className="btn btn-light offer-btn">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .offer-card {
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          transition: transform 0.3s ease-in-out;
        }

        .offer-card:hover {
          transform: scale(1.02);
        }

        .offer-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.3s;
        }

        .offer-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
          transition: background 0.3s;
        }

        .offer-card:hover .offer-overlay {
          background: rgba(0, 0, 0, 0.6);
        }

        .offer-title {
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
          margin-top: 20px; /* Moved down */
          text-transform: uppercase;
        }

        .offer-subtitle {
          font-size: 1rem;
          color: #ffeb3b;
          margin-bottom: 5px;
          text-transform: uppercase;
        }

        .offer-btn {
          padding: 8px 16px;
          font-weight: 600;
          border-radius: 20px;
        }

        @media (max-width: 768px) {
          .offer-title {
            font-size: 1.5rem;
          }
          .offer-btn {
            padding: 6px 12px;
          }
        }
      `}</style>
    </section>
  );
}
