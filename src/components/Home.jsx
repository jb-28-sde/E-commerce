import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

export default function Home() {
  return (
    <div className="position-relative overflow-hidden">
      <video
        className="w-100 object-fit-cover"
        style={{ height: "100vh", objectFit: "cover" }}
        loop
        muted
        autoPlay
        playsInline
        src="https://videocdn.cdnpk.net/videos/bd924df5-61af-47a0-9efc-211a0b63ce9f/horizontal/previews/clear/large.mp4?token=exp=1753441837~hmac=3f3b448f60e83b0d29f8029c60afab7adab9ea064cc56f72437301d53fbb38de"
      ></video>

      <div
        className="position-absolute top-50 start-50 translate-middle text-center text-white p-4"
        style={{
          zIndex: 2,
          backgroundColor: "rgba(0, 0, 0, 0.0)",
          borderRadius: "20px",
        }}
      >
        <h1
          className="fw-bold mb-4"
          style={{
            fontSize: "3rem",
            color: "#f8f9fa",
            textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
            letterSpacing: "1px",
            lineHeight: "1.2",
          }}
        >
          Welcome to <span style={{ color: "#a1c9c3" }}>Bhartiya Mart</span>
        </h1>
        <Link to={"/product"}>
          <button className="btn btn-warning btn-lg px-4 py-2 rounded-pill fw-semibold shadow">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
}
