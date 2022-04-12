import React, { useEffect, useState } from "react";
import data from "../data/products";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./viewProduct.css";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { addToCart } from "../actions";


const ViewProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const items = useSelector((state) => state.Cart.items);
  const [product, setProduct] = useState({});
  useEffect(() => {
    console.log("fdsfggv");
    setProduct(() => {
    console.log("fdsfggv fghdffhf",data);

     return data.find((p) => {
        console.log("gdfgdfg",p,"idd",id);
        if (p.id == id) {
          console.log("true");
          return p;
        }
      })
    }
    );
    console.log("product after setttling",product);
  }, []);

  const checkProduct = (id) => {
    let res = items?.find((i) => {
      if (i.id === id) {
        return true;
      }
    });
    if (res) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <div className="container my-4">
        <div className="box">
          <img src={product?.image} alt="error" height="200px" width="200px" />
          <div className="mx-4">
            <div className="block">
              <b>Category - </b> {product?.category}
            </div>
            <div className="block">
              <b>Description - </b> {product?.description}
            </div>
            <div className="block">
              <b>Title - </b> {product?.title}
            </div>
            <div className="block">
              <b>Price - </b> {product?.price}
            </div>
            <div className="block">
              <b>Rating - </b> {product?.rating?.rate} | {product?.rating?.count}
            </div>
            <div>
              {checkProduct(product?.id) ? (
                <button
                  className="btn btn-danger btn-sm"
                  style={{ width: "120px" }}
                  onClick={() => {
                    navigate("/CartItems");
                  }}
                >
                  <ShoppingCartCheckoutIcon /> Remove from Cart
                </button>
              ) : (
                <button
                  className="btn btn-success btn-sm"
                  style={{ width: "120px" }}
                  onClick={() => {
                    dispatch(addToCart(product));
                  }}
                >
                  <ShoppingCartCheckoutIcon /> Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProduct;
