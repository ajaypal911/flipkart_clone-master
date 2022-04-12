import logo from "./logo.svg";
import "./App.css";
import Counter from "./Components/counter";
import Header from "./Components/header";
import Homepage from "./Components/homepage";
import SignInSide from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartItems from "./Components/CartItems";
import ViewProduct from "./Components/viewProduct.js";
import Admin from "./Components/admin";
import AdminAddProduct from "./Components/Addproduct";
import AdminEditProduct from "./Components/EditProduct";
import Pagenotfound from "./Components/pagenotfound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/SignInSide" element={<SignInSide />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="CartItems" element={<CartItems />} />
        <Route path="/ViewProduct/:id" element={<ViewProduct />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/AdminAddproduct" element={<AdminAddProduct />} />
        <Route path="/AdminEditproduct/:id" element={<AdminEditProduct />} />
        <Route path="*" element={<Pagenotfound />} />

      </Routes>
    </>
  );
}

export default App;
