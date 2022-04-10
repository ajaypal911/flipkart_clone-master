import React from "react";

export default function CatagoryList() {
  return (
    <>
      <div className="container-fluid">
        <div
          className="row my-1 py-3"
          style={{ fontWeight: "bold", textAlign: "center", background: "#f0f5f4", height: "75px" }}
        >
          <div className="col" style={{}}>
            Top Offers
          </div>
          <div className="col" style={{}}>
            Grocery
          </div>
          <div className="col" style={{}}>
            Mobile
          </div>
          <div className="col" style={{}}>
            Fashion
          </div>
          <div className="col" style={{}}>
            Electronics
          </div>
          <div className="col" style={{}}>
            Home
          </div>
          <div className="col" style={{}}>
            Appliances
          </div>
          <div className="col" style={{}}>
            Travel
          </div>
          <div className="col" style={{}}>
            Beauty,travel & more
          </div>
        </div>
      </div>
    </>
  );
}
