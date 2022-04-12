import React from 'react'

const initial = {
    products:[]
}
const Admin = (state=initial,action) => {
    switch (action.type) {
      case "ADD_PRODUCT":
        console.log("ADD_PRODUCTS paylopadf", action.payload);
        return { ...state, products: [...state.products, action.payload] };
      case "DELETE_PRODUCT":
        let id_product = action.payload;
        console.log("delete product", id_product);
        let newST2 = state.products.filter((item, ind) => (item.id === id_product ? "" : item));
        console.log("lion", id_product, newST2);
        return { products: newST2 };
      case "SAVE_PRODUCT":
            console.log("action p[load", action.payload);
            let saveProducts = state.products.filter((item, ind) => {
                console.log("in fikter", item.id, action.payload.id);
                return item.id === action.payload.id ? action.payload : item;
            }
            );
        console.log("saveoproducts", saveProducts);
        return { products: saveProducts };
      default:
        return state;
    }
}

export default Admin