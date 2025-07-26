import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { addToCart } from "../Features/CartSlice";
import { useDispatch } from "react-redux";

export default function SingleProduct() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data))
      .catch((err) => console.error(err));
  }, [id]);

  const addProduct = (singleItem) => {
    dispatch(addToCart(singleItem));
    Navigate("/cart");
  };

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const totalPrice = singleProduct.price ? singleProduct.price * quantity : 0;

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

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center text-primary">Product Details</h2>

      {singleProduct && singleProduct.thumbnail ? (
        <div className="row shadow-lg p-4 rounded">
          <div className="col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0">
            <img
              src={singleProduct.thumbnail}
              alt={singleProduct.title}
              className="img-fluid rounded"
              style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
            />
          </div>

          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h3 className="mb-3">{singleProduct.title}</h3>
            <p className="text-muted mb-2">{singleProduct.description}</p>
            <h4 className="text-success mb-2">
              Price: ₹{Math.round(singleProduct.price)}
            </h4>

            <div className="mb-3 d-flex align-items-center">
              <strong className="me-2">Rating:</strong>
              <div className="d-flex align-items-center">
                {getStars(singleProduct.rating)}
                <span className="ms-2 text-muted">
                  ({singleProduct.rating?.toFixed(1)})
                </span>
              </div>
            </div>

            <p className="mb-2">
              <strong>Discount:</strong>
              {Math.round(singleProduct.discountPercentage)}%
            </p>

            <div className="d-flex align-items-center mb-3">
              <button
                className="btn btn-outline-secondary"
                onClick={decreaseQty}
              >
                −
              </button>
              <span className="mx-3 fs-5">{quantity}</span>
              <button
                className="btn btn-outline-secondary"
                onClick={increaseQty}
              >
                +
              </button>
            </div>

            <h5 className="text-dark mb-3">
              Total Price: ₹{Math.round(totalPrice)}
            </h5>

            <button
              onClick={() => addProduct(singleProduct)}
              className="btn btn-primary btn-lg mt-2"
              style={{ maxWidth: "200px" }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p>Loading product...</p>
        </div>
      )}
    </div>
  );
}
