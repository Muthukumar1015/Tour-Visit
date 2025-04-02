import { useState } from "react";
import { FaTree, FaHiking, FaCity, FaLandmark, FaUmbrellaBeach, FaShip, FaSkiing, FaCampground } from "react-icons/fa";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const tourTypes = [
  { id: 1, name: "Wildlife Tour", tours: 5, price: "$650", icon: <FaTree /> },
  { id: 2, name: "Adventure Tour", tours: 4, price: "$550", icon: <FaHiking /> },
  { id: 3, name: "City Tours", tours: 8, price: "$700", icon: <FaCity /> },
  { id: 4, name: "Museum Tours", tours: 6, price: "$800", icon: <FaLandmark /> },
  { id: 5, name: "Beaches Tour", tours: 5, price: "$550", icon: <FaUmbrellaBeach /> },
  { id: 6, name: "Cruise Tour", tours: 3, price: "$900", icon: <FaShip /> },
  { id: 7, name: "Skiing Tour", tours: 4, price: "$750", icon: <FaSkiing /> },
  { id: 8, name: "Camping Tour", tours: 5, price: "$500", icon: <FaCampground /> },
];

export default function ChooseTourTypes() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 4;

  const handleNext = () => {
    if (startIndex < tourTypes.length - 1) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Choose Tour Types</h2>
        <p style={styles.subtitle}>Interdum et malesuada fames ac ante ipsum</p>
        <div style={styles.navButtons}>
          <button onClick={handlePrev} style={styles.arrowButton} disabled={startIndex === 0}>
            <BsArrowLeft />
          </button>
          <button onClick={handleNext} style={styles.arrowButton} disabled={startIndex >= tourTypes.length - itemsToShow}>
            <BsArrowRight />
          </button>
        </div>
      </div>

      <div style={styles.sliderContainer}>
        <div style={{ ...styles.tourList, transform: `translateX(-${startIndex * 220}px)` }}>
          {tourTypes.map((tour) => (
            <div key={tour.id} style={styles.card}>
              <div style={styles.icon}>{tour.icon}</div>
              <h4 style={styles.tourName}>{tour.name}</h4>
              <p style={styles.tourInfo}>{tour.tours} Tours From {tour.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Internal CSS Styles
const styles = {
  container: {
    textAlign: "center",
    padding: "50px 20px",
    backgroundColor: "#f8f9fc",
    overflow: "hidden",
  },
  header: {
    position: "relative",
    marginBottom: "30px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#0a0b0d",
  },
  subtitle: {
    color: "#6c757d",
    fontSize: "16px",
  },
  navButtons: {
    position: "absolute",
    right: "10px",
    top: "10px",
    display: "flex",
    gap: "10px",
  },
  arrowButton: {
    border: "none",
    backgroundColor: "transparent",
    fontSize: "24px",
    cursor: "pointer",
    color: "#0a0b0d",
    opacity: 0.7,
  },
  sliderContainer: {
    width: "900px",
    overflow: "hidden",
    margin: "0 auto",
    position: "relative",
  },
  tourList: {
    display: "flex",
    transition: "transform 0.5s ease-in-out",
    gap: "15px",
    width: "calc(220px * 8)", // Total width for all items
  },
  card: {
    backgroundColor: "#f1f3f9",
    padding: "20px",
    borderRadius: "10px",
    width: "200px",
    textAlign: "center",
    transition: "0.3s",
    flexShrink: 0,
  },
  icon: {
    fontSize: "40px",
    color: "#007bff",
  },
  tourName: {
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "10px",
  },
  tourInfo: {
    color: "#6c757d",
    fontSize: "14px",
  },
};
