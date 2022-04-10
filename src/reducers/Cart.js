import React from 'react'
import { useDispatch } from 'react-redux';

const initialstate = {
  items: [],
  quantity: 0,
  viewProduct: 1
};
const Cart = (state = { ...initialstate }, action) => {
  //  const dispatch=useDispatch();
  switch (action.type) {
    case "ADD_ITEM":
      let pload = { ...action.payload, quantity: 1 }
      return { ...state, items: [...state?.items, pload], quantity: state.items.length };
    case "REMOVE_ITEM":
      let data = state.items;
      console.log("items datat", data)
      let res = data.filter((item) => {
        if (item !== action.payload) {
          return item;
        }
      })
      return { ...state, items: res };
    case "SET_VIEWPRODUCT":
      return { ...state, viewProduct: action.payload };
    case "INCREASE_QUANTITY":
      let myitems = [...state.items];
      console.log("item and payload", myitems, action.payload);
    
      console.log("before", "myitems", myitems);
      myitems = myitems.map((elem, i) => {
        console.log(i, elem);
        if (elem.id == action.payload) {
          console.log("elem in map", elem.quantity);
          return {
            category: elem.category,
            description: elem.description,
            id: elem.id,
            image: elem.image,
            price: elem.price,
            rating: { ...elem.rating },
            title: elem.title,
            quantity: elem.quantity + 1
          }
        }
          return elem;
        });
      console.log("after", myitems);
      return { ...state, items: myitems };
    case "DECREASE_QUANTITY":
      let myitems2 = [...state.items];
      console.log("item and payload", myitems2, action.payload);
    
      console.log("before", "myitems", myitems2);
      myitems2 = myitems2.map((elem, i) => {
        console.log(i, elem);
        if (elem.id == action.payload) {
          console.log("elem in map", elem.quantity);
          return {
            category: elem.category,
            description: elem.description,
            id: elem.id,
            image: elem.image,
            price: elem.price,
            rating: { ...elem.rating },
            title: elem.title,
            quantity: ((elem.quantity > 0) ? (elem.quantity - 1) : 0) 
          }
        }
          return elem;
        });
      console.log("after", myitems2);
      return { ...state, items: myitems2 };
    default:
      return state;
  }
};
export default Cart;