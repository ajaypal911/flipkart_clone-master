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

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/SignInSide" element={<SignInSide />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="CartItems" element={<CartItems />} />
        <Route path="ViewProduct" element={<ViewProduct />} />
      </Routes>
    </>
  );
}

export default App;
