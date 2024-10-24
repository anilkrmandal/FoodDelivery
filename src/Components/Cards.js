import React, { useState } from 'react';

export default function Cards({ categoryName, name, img, description }) {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("half");
  const pricePerSize = {
    half: 10, // Example price
    full: 15, // Example price
  };

  const totalPrice = pricePerSize[size] * quantity;

  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <div className="container w-100">
            <select
              className="m-2 h-100 bg-success"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}  // Fixed issue with quantity as a number
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>

            <select
              className="m-2 h-100 bg-success rounded"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>

            <div className="d-inline h-100 fs-5">Total Price: ${totalPrice.toFixed(2)}</div> {/* Price precision */}
          </div>
        </div>
      </div>
    </div>
  );
}
