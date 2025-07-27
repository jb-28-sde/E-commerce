import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setSlides(data.products.slice(3, 15)))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="position-relative overflow-hidden">
      <div
        id="heroCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="1000"
        data-bs-pause="false"
      >
        <div className="carousel-inner" style={{ height: "100vh" }}>
          {slides.map((item, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={item.id}
            >
              <img
                src={item.thumbnail}
                className="d-block w-100"
                alt={item.title}
                style={{ height: "100vh", objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className="position-absolute top-50 start-50 translate-middle text-center text-white p-4"
        style={{ zIndex: 2 }}
      >
        <h1
          className="fw-bold mb-4"
          style={{
            fontSize: "3rem",
            color: "#f8f9fa",
            textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
          }}
        >
          Welcome to <span style={{ color: "#a1c9c3" }}>Bhartiya Mart</span>
        </h1>
        <Link to="/product">
          <button className="btn btn-warning btn-lg px-4 py-2 rounded-pill fw-semibold shadow">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
}
