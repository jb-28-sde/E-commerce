import React from "react";
import { Link } from "react-router-dom";
import './About.css'

export default function About() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="https://pbs.twimg.com/profile_images/1306848938478252034/1JCN5K5G_400x400.jpg"
            alt="About BM Mart"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6">
          <h2 className="text-success fw-bold mb-3">About Us</h2>
          <p className="lead">
            <strong>Bhartiya Market (BM Mart)</strong> is your one-stop
            destination for a wide range of quality products at affordable
            prices. We are proudly Indian 🇮🇳 and committed to delivering
            top-notch customer experience, just like your neighborhood store —
            but online!
          </p>
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">✔ 100% Verified Products</li>
            <li className="list-group-item">✔ Fast & Reliable Delivery</li>
            <li className="list-group-item">✔ Secure Payments</li>
            <li className="list-group-item">✔ Excellent Customer Support</li>
          </ul>
          <Link to={"/product"}>
            <button className="btn btn-warning px-4 fw-semibold">
              Explore Our Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
