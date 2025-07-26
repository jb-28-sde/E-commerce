import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FaTrash,
  FaUser,
  FaMapMarkerAlt,
  FaCity,
  FaGlobe,
  FaFlag,
  FaMapPin,
  FaPhoneAlt,
  FaRupeeSign,
  FaTruck,
  FaMoneyBillWave,
} from "react-icons/fa";
import { removeFromCart } from "../Features/CartSlice";

function Cart() {
  const product = useSelector((state) => state.cart.item);
  const dispatch = useDispatch();

  const [quantities, setQuantities] = useState(
    product.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {})
  );

  const total = product.reduce((acc, item) => {
    const quantity = quantities[item.id] || 1;
    return acc + quantity * Number(item.price || 0);
  }, 0);

  const shipping = 0;
  const grandTotal = Math.round(total + shipping);

  const handleQuantityChange = (id, newQty) => {
    if (newQty < 1) return;
    setQuantities({ ...quantities, [id]: Number(newQty) });
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 display-5 fw-semibold text-primary">
        Shopping Cart
      </h2>

      <div className="row">
        <div className="col-md-8">
          {product.length === 0 ? (
            <div className="alert alert-info text-center p-4 fw-medium">
              Your cart is empty. Start adding some products!
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-bordered align-middle text-center">
                <thead className="table-dark">
                  <tr>
                    <th style={{ width: "140px" }}>Image</th>
                    <th>Product</th>
                    <th style={{ width: "110px" }}>Price</th>
                    <th style={{ width: "120px" }}>Quantity</th>
                    <th style={{ width: "120px" }}>Total</th>
                    <th style={{ width: "110px" }}>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {product.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          style={{
                            width: "120px",
                            height: "120px",
                            objectFit: "cover",
                          }}
                          className="rounded"
                        />
                      </td>
                      <td className="fw-semibold text-start">{item.title}</td>
                      <td className="text-success fw-medium">
                        <FaRupeeSign className="me-1" />
                        {item.price}
                      </td>
                      <td>
                        <input
                          type="number"
                          min="1"
                          value={quantities[item.id]}
                          onChange={(e) =>
                            handleQuantityChange(item.id, e.target.value)
                          }
                          className="form-control form-control-sm text-center"
                          style={{ width: "60px", margin: "0 auto" }}
                        />
                      </td>
                      <td>
                        <FaRupeeSign className="me-1" />
                        {quantities[item.id] * item.price}
                      </td>
                      <td>
                        <button
                          onClick={() => dispatch(removeFromCart(item.id))}
                          className="btn btn-outline-danger btn-sm"
                        >
                          <FaTrash className="me-1" /> Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm p-4 border-0 mb-4">
            <h4 className="mb-3 text-secondary">
              <FaTruck className="me-2 text-dark" />
              Shipping Address
            </h4>
            <form>
              {[
                { icon: <FaUser />, placeholder: "Enter your name" },
                {
                  icon: <FaMapMarkerAlt />,
                  placeholder: "Enter your address",
                },
                { icon: <FaCity />, placeholder: "Enter your city" },
                { icon: <FaGlobe />, placeholder: "Enter your country" },
                { icon: <FaFlag />, placeholder: "Enter your state" },
                { icon: <FaMapPin />, placeholder: "Enter your pin code" },
                {
                  icon: <FaPhoneAlt />,
                  placeholder: "Enter your number",
                  type: "number",
                },
              ].map((field, index) => (
                <div key={index} className="input-group mb-3">
                  <span className="input-group-text bg-light">
                    {field.icon}
                  </span>
                  <input
                    type={field.type || "text"}
                    className="form-control"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>

          <div className="card shadow-sm p-4 border-0">
            <h5 className="text-secondary">
              <FaMoneyBillWave className="me-2 text-dark" />
              Price Details
            </h5>
            <hr />
            <div className="d-flex justify-content-between mb-2">
              <span>Total Items:</span>
              <span>{product.length}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal:</span>
              <span>
                <FaRupeeSign className="me-1" />
                {total}
              </span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Shipping:</span>
              <span>
                <FaRupeeSign className="me-1" />
                {shipping}
              </span>
            </div>
            <hr />
            <div className="d-flex justify-content-between fs-5 fw-bold">
              <span>Total:</span>
              <span>
                <FaRupeeSign className="me-1" />
                {grandTotal}
              </span>
            </div>
            <button className="btn btn-success mt-3 w-100">
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
