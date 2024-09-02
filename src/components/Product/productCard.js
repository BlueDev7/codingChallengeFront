import React from "react";
import Card from "react-bootstrap/Card";
import "./productCard.css";

function ProductCard({ product, onClick, className }) {
  if (!product) {
    return (
      <div className="alert alert-warning">Product data is not available.</div>
    );
  }
  return (
    <Card
      onClick={onClick}
      style={{ width: "18rem", cursor: "pointer" }}
      className={`mb-4 shadow-sm mt product-card  ${className}`}
    >
      <div className="img-container">
        <img src={product.image} alt={product.Title} />
      </div>

      <Card.Body className="d-flex flex-column product-card-body">
        <Card.Title>{product.Title}</Card.Title>
        <Card.Text>
          <strong>Price : ${product.price} </strong>
        </Card.Text>
        <Card.Text>
          <div className="mt-auto d-flex justify-content-between align-items-center">
            <span className="badge bg-success">
              Rating : {product.rating.rate}/5
            </span>
            <span>Reviews : {product.rating.count}</span>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
