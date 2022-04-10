import React, { useContext } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import StoreIcon from "@mui/icons-material/Store";
import "./LoginT.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LoginT = () => {
  const lflag = useSelector((state) => state.Log.lflag);
  const name = useSelector((state) => state.Log.loggedUser?.name);
  const navigate = useNavigate();

  // const { DispatchUserEvent } = useContext(AppContext);
  return (
    <div className="logint">
      {lflag ?  <div className="logint__i">
           <h2>{name}</h2> </div>
        : <div className="logint__i">
          <h2>New customer</h2>
          <p
            className="pointer"
            onClick={() => {
              // DispatchUserEvent("SET_SIGNUPFLAG");
              navigate("/SignUp");
            }}
          >
            Signup
          </p>
        </div> }
      <hr />
      <div className="logint__in">
        <AccountCircleIcon />
        <p>My Profile</p>
      </div>
      <hr />
      <hr />
      <div className="logint__in">
        <StoreIcon />
        <p>Orders</p>
      </div>
      <hr />
      <div className="logint__in">
        <FavoriteIcon />
        <p>Wishlist</p>
      </div>
      <hr />
      <div className="logint__in">
        <ConfirmationNumberIcon />
        <p>Rewards</p>
      </div>
      <hr />
      <div className="logint__in">
        <CardGiftcardIcon />
        <p>Gift Cards</p>
      </div>
    </div>
  );
};

export default LoginT;
