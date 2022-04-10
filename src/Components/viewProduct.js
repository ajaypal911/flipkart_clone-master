import React from "react";
import { useSelector } from "react-redux";
import "./viewProduct.css";

const ViewProduct = () => {
  const data = useSelector((state) => state.Cart?.viewProduct);
  console.log("product data", data);
  return (
    <>
         <div className='container my-4' >
           <div className='box' >
             <img src={data.image} alt="error" height="200px" width="200px" />
           <div className='mx-4'>
             <div className="block">
               <b>Category - </b> {data.category}
             </div>
             <div className="block">
               <b>Description - </b> {data.description}
             </div>
             <div className="block">
               <b>Title - </b> {data.title}
             </div>
             <div className="block">
               <b>Price - </b> {data.price}
             </div>
             <div className="block">
               <b>Rating - </b> {data.rating.rate} | {data.rating.count}
             </div>
               
           </div>
           </div> 
         </div>
    </>
  );
};

export default ViewProduct;
