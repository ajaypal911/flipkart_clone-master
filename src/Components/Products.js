import data from "../data/products";
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, setViewProduct } from "../actions/index"
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import {useNavigate } from "react-router-dom";

function Products() {
  const items = useSelector((state) => state.Cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const checkProduct = (id) => {
    let res = items?.find((i) => {
      if (i.id === id) {
        return true;
        }
    })
    if (res) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <div className="container" style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
      {data.map((elem) => {
        return (
          <div className="border col-lg-2 col-md-3 col-sm-6 my-2 px-3" style={{ display: "flex", flexWrap: "wrap" }}
             >
            <center>
              <img
                // className="img-fluid"
                src={elem.image}
                width="120px"
                height="120px"
                alt="error"
                style={{
                  padding: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center",
                  margin: "auto",
                }}
                onClick={() => {
                  navigate(`ViewProduct/${elem.id}`);
              dispatch(setViewProduct(elem));
              console.log("div clicked");
            }}
              />
          
            </center>
            <div style={{ fontSize: "14px" }}>Category - {elem.category.toUpperCase()}</div>
            <div style={{ fontSize: "14px" }}>Price - ${elem.price} </div>
            <div style={{ fontSize: "14px" }}>
              Rating - {elem.rating["rate"]} and {elem.rating["count"]}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products
