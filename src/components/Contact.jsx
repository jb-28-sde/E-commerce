import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import './Contact.css'

export default function Contact() {
  return (
    <div className="container py-5">
      <h2 className="text-center text-primary fw-bold mb-5">Get in Touch</h2>

      <div className="row text-center mb-5">
        <div className="col-md-4 mb-4">
          <div className="p-4 border rounded shadow-sm h-100 bg-light">
            <FaMapMarkerAlt size={40} className="mb-3 text-danger" />
            <h5 className="fw-bold">Our Address</h5>
            <p className="text-muted mb-0">
              123 Bhartiya Street, Mumbai, India
            </p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="p-4 border rounded shadow-sm h-100 bg-light">
            <FaEnvelope size={40} className="mb-3 text-success" />
            <h5 className="fw-bold">Email Us</h5>
            <p className="text-muted mb-0">support@bmmart.in</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="p-4 border rounded shadow-sm h-100 bg-light">
            <FaPhoneAlt size={35} className="mb-3 text-primary" />
            <h5 className="fw-bold">Call Us</h5>
            <p className="text-muted mb-0">+91 98765 43210</p>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow border-0">
            <div className="card-body p-4">
              <h4 className="mb-4 text-secondary fw-bold">Send Us a Message</h4>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control rounded"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control rounded"
                    id="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-semibold">
                    Message
                  </label>
                  <textarea
                    className="form-control rounded"
                    id="message"
                    rows="4"
                    placeholder="Type your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-warning px-4 fw-semibold"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
