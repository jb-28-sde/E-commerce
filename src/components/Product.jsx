import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import './Product.css';


export default function Product() {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data.slice(0, 4));
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data.products))
      .catch((err) => console.error(err));
  }, []);

  const getStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} color="gold" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" color="gold" />);
    }

    while (stars.length < 5) {
      stars.push(<FaRegStar key={"empty" + stars.length} color="gold" />);
    }

    return stars;
  };
  const filteredProduct = selectedCategory
    ? product.filter((item) => item.category === selectedCategory)
    : product;

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3 mb-4">
            <h4 className="text-primary mb-3">Categories</h4>
            <ul className="list-group">
              <li
                className={`list-group-item ${
                  selectedCategory === null ? "active" : ""
                }`}
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedCategory(null)}
              >
                All
              </li>
              {category.map((val, index) => (
                <li
                  key={index}
                  className={`list-group-item text-capitalize ${
                    selectedCategory === val ? "active" : ""
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedCategory(val.slug)}
                >
                  {val.slug}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-9">
            <style>
              {`
                .product-card {
                  transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .product-card:hover {
                  transform: translateY(-6px);
                  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
                }
              `}
            </style>

            <div className="w-100 bg-secondary py-3 mb-4">
              <h1 className="text-center fw-bold text-primary mb-0">
                Our Products
              </h1>
            </div>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
              {filteredProduct.map((item) => (
                <div className="col" key={item.id}>
                  <div className="card h-100 shadow-sm border-0 product-card">
                    <div className="p-2">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="card-img-top rounded"
                        style={{
                          height: "230px",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <div className="card-body d-flex flex-column">
                      <h5 className="fw-semibold text-truncate">
                        {item.title}
                      </h5>

                      <div className="d-flex align-items-center mb-2">
                        {getStars(item.rating)}
                        <span className="ms-2 text-muted small">
                          ({item.rating.toFixed(1)})
                        </span>
                      </div>

                      <div className="mb-2">
                        <span className="fw-bold text-success fs-5">
                          ₹{item.price}
                        </span>
                        <span className="ms-2 text-danger small">
                          ({Math.round(item.discountPercentage)}% OFF)
                        </span>
                      </div>

                      <div className="mb-3">
                        <span className="badge bg-secondary text-capitalize">
                          {item.tags?.[0] || "No tag"}
                        </span>
                      </div>

                      <Link
                        to={`/singleProduct/${item.id}`}
                        className="mt-auto"
                      >
                        <button className="btn btn-warning w-100 fw-bold rounded">
                          Add To Cart
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
