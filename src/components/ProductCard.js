import React from "react";
import "../styles/product.css";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <>
      <div class="container-fluid">
        <div class="card mx-auto col-md-3 col-10 mt-5">
          {" "}
          <Image src={product.image} thumbnail />
          <div class="card-body text-center mx-auto">
            <div class="cvp">
              <h5 class="card-title font-weight-bold">{product.name}</h5>
              <p class="card-text">₹{product.price}</p>{" "}
              <Link to={`/product/${product._id}`}>
              <button type="button" class="btn btn-info">MORE DETAILS</button>
              </Link>
              <Link to={`/product/${product._id}`}></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
