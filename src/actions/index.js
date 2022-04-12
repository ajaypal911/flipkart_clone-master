export const increment = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};
export const setValue = (num) => {
  return {
    type: "SET_VALUE",
    payload: num,
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
    // payload: num
  };
};
export const addToCart = (newItem) => {
  return {
    type: "ADD_ITEM",
    payload: newItem,
  };
};
export const removeFromCart = (newItem) => {
  return {
    type: "REMOVE_ITEM",
    payload: newItem,
  };
};
export const resetCart = () => {
  console.log("resetCart in action");
  return {
    type: "RESET_CART",
  }
}
export const increaseQuantity = (newItem) => {
  return {
    type: "INCREASE_QUANTITY",
    payload: newItem,
  };
};
export const decreaseQuantity = (newItem) => {
  return {
    type: "DECREASE_QUANTITY",
    payload: newItem,
  };
};

export const DetailViewer = (detail) => {
  return {
    type: "Detail_Viewer",
    payload: detail,
  };
};
export const AddUser = (user) => {
  console.log(user, "check datata acacacaca");
  return {
    type: "ADD_USER",
    payload: user,
  };
};
export const setBeforeLogout= (data) => {
   console.log("setBeforeLogout in action");
  return {
    type: "SET_BEFORE_LOGOUT",
    payload: data
  };
};
export const setCartBeforeLogin= (data) => {
   console.log("setBeforeLogin in action");
  return {
    type: "SET_CART",
    payload: data
  };
};

export const setFlag = (data) => {
  return {
    type: "SETFLAG",
     payload: data.user
  };
};
export const resetFlag = () => {
  return {
    type: "RESETFLAG",
    // payload: num
  };
};
export const logUser = (userdata) => {
  return {
    type: "LOGGEDUSER",
    payload: userdata,
  };
};

export const setViewProduct = (data) => {
  return {
    type: "SET_VIEWPRODUCT",
    payload: data,
  };
};
export const printUser = () => {
  return {
    type: "PRINT_STATE",
    // payload: data,
  };
};

export const addProduct = (data) => {
  console.log("in addproduct action");
  return {
    type: "ADD_PRODUCT",
    payload: data,
  };
};

export const deleteProduct = (data) => {
  console.log("in deleteproduct action");
  return {
    type: "DELETE_PRODUCT",
    payload: data,
  };
};
export const saveAfterEditProduct = (data) => {
  console.log("in saveAfterEditproduct action");
  return {
    type: "SAVE_PRODUCT",
    payload: data,
  };
};