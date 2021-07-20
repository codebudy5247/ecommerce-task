import React from "react";
import "../styles/product.css";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import CardMedia from '@material-ui/core/CardMedia';

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="card mx-auto col-md-3 col-10 mt-5">
          {" "}
          <Image src={product.image} thumbnail />
          <div className="card-body text-center mx-auto">
            <div className="cvp">
              <h5 className="card-title font-weight-bold">{product.name}</h5>
              <p className="card-text">₹{product.price}</p>{" "}
              <Link to={`/product/${product._id}`}>
              <button type="button" className="btn btn-info">MORE DETAILS</button>
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
