import React from "react";
import { FaArrowRight } from "react-icons/fa";

const locations = [
  { name: "Miami", properties: "4,090", image: "/images/miami.png" },
  { name: "Roma", properties: "4,090", image: "/images/roma.png" },
  { name: "New Delhi", properties: "4,090", image: "/images/newdelhi.png" },
  { name: "London", properties: "4,090", image: "/images/london.png" },
  { name: "Amsterdam", properties: "4,090", image: "/images/amsterdam.png" },
  { name: "Berlin", properties: "4,090", image: "/images/berlin.png" },
  { name: "Paris", properties: "4,090", image: "/images/paris.png" },
  { name: "New Zealand", properties: "4,090", image: "/images/newzealand.png" },
];

export default function ExploreHotLocations() {
  return (
    <section style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Explore Hot Locations</h2>
        <p style={styles.subtitle}>Interdum et malesuada fames ac ante ipsum</p>
      </div>
      <div style={styles.grid}>
        {locations.map((location, index) => (
          <div key={index} style={styles.card}>
            <img src={location.image} alt={location.name} style={styles.image} />
            <div>
              <h4 style={styles.locationName}>{location.name}</h4>
              <p style={styles.propertyCount}>{location.properties} properties</p>
            </div>
          </div>
        ))}
      </div>
      <button style={styles.moreButton}>
        More <FaArrowRight />
      </button>
    </section>
  );
}

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "auto",
    padding: "50px 20px",
  },
  header: {
    textAlign: "left",
    marginBottom: "20px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#0d1b2a",
  },
  subtitle: {
    color: "#6c757d",
    fontSize: "16px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    background: "#f8f9fa",
    padding: "15px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s ease",
  },
  image: {
    width: "80px",
    height: "80px",
    borderRadius: "8px",
    objectFit: "cover",
  },
  locationName: {
    fontSize: "18px",
    fontWeight: "600",
    margin: "0",
  },
  propertyCount: {
    color: "#6c757d",
    fontSize: "14px",
  },
  moreButton: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    color: "#007bff",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
};
