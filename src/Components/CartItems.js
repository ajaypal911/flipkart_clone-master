import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import "./CartItems.css";
import { increaseQuantity,decreaseQuantity, removeFromCart } from '../actions';


const CartItems = () => {
  const dispatch = useDispatch();
    const items = useSelector((state) => state.Cart.items);
    const calculateprice = () => {
        let sum = 0;
        for(let i = 0; i < items.length; i++) {
            sum += items[i]?.price*items[i].quantity;
        }
        return sum;
    }
  const calculateTotalItems = () => {
    let c = 0;
        for(let i = 0; i < items.length; i++) {
            c += items[i].quantity;
        }
        return c;
  }
    const print = () => {
        return items.map((elem) => {
            return (
              <div className="row border-top border-bottom body1">
                <div className="row main align-items-center">
                  <div className="col-2">
                    <img className="img-fluid" src={elem?.image} alt="error" />
                  </div>
                  <div className="col">
                    <div className="row text-muted">{elem?.category}</div>
                    <div className="row">{elem?.title}</div>
                  </div>
                  <div className="col">
                    {" "}
                        <span className="ptr"  onClick={()=>{
                          dispatch(decreaseQuantity(elem?.id));
                        }}>-</span>
                        <span className="border"> {elem?.quantity } </span>
                        <span  className="ptr"
                         onClick={()=>{
                          dispatch(increaseQuantity(elem?.id));
                        }}
                        >+</span>
                  </div>
                  <div className="col">
                    &euro; {elem?.price*elem.quantity} <span className="close"
                      onClick={() => {
                      dispatch(removeFromCart(elem))
                    }}>&#10005;</span>
                  </div>
                </div>
              </div>
            );
         })
     }
    return (
      <>
        <br />
        <div className="card1" style={{background:"#ddd"}}>
          <div className="row">
            <div className="col-md-8 cart">
              <div className="title">
                <div className="row">
                  <div className="col">
                    <h4>
                      <b>Shopping Cart</b>
                    </h4>
                  </div>
                  <div className="col align-self-center text-right text-muted">{calculateTotalItems()} items</div>
                </div>
              </div>
              {print()}

              <div className="back-to-shop">
                <a className="text-muted" href="/">
                  Back to shop
                </a>
              </div>
            </div>
            <div className="col-md-4 summary">
              <div>
                <h5>
                  <b>Summary</b>
                </h5>
              </div>
              <hr />
              <div className="row">
                <div className="col" style={{ paddingleft: "0" }}>
                  ITEMS {calculateTotalItems()}
                </div>
                <div className="col text-right">&euro;{calculateprice()}</div>
              </div>
              <form>
                <p>SHIPPING</p>{" "}
                <select>
                  <option className="text-muted">Standard-Delivery- &euro;5.00</option>
                </select>
                <p>GIVE CODE</p> <input  className='input1 inputhover1' id="code" placeholder="Enter your code" />
              </form>
              <div className="row" style={{ borderTop: " 1px solid rgba(0,0,0,.1)", padding: "2vh 0" }}>
                <div className="col">TOTAL PRICE</div>
                <div className="col text-right">&euro; {calculateprice() + 5}</div>
              </div>{" "}
              <button className="bttn">CHECKOUT</button>
            </div>
          </div>
        </div>
      </>
    );
}

export default CartItems