import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../actions';

const AdminAddProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const products = useSelector((state) => state.products);
  console.log("products length", products);
  const [pimage, setPimage] = useState("");
    const [newProduct, setNewProduct] = useState({
        // id: products?.length  ? products.length+21 : 21,
        id:Date.now(),
        title: "",
        price: "",
        description: "",
        category: " ",
        image:""
    })
    const handleInput = (e) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("newProduct",newProduct);
        dispatch(addProduct(newProduct));
        navigate("/Admin");
    }
   const getBase64 = (file) =>
     new Promise((resolve, reject) => {
       const reader = new FileReader();
       reader.readAsDataURL(file);
       reader.onload = () => resolve(reader.result);
       reader.onerror = (error) => reject(error);
     });

   const handlImageFile = async (e) => {
     let imageblob = await getBase64(e.target.files[0]);
     console.log(imageblob);
     setNewProduct({ ...newProduct, [e.target.name]: imageblob });
     setPimage(imageblob);
   };
  return (
    <div className="container col-6">
      <center>
        <h3>Admin Panel - Add Product</h3>
      </center>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            value={newProduct.title}
            onChange={handleInput}
            name="title"
            className="form-control"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label for="price" className="form-label">
            Price
          </label>
          <input
            type="text"
            value={newProduct.price}
            onChange={handleInput}
            name="price"
            className="form-control"
            id="price"
          />
        </div>

        <div className="mb-3">
          <label for="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            value={newProduct.description}
            onChange={handleInput}
            name="description"
            className="form-control"
            id="description"
          />
        </div>

        <div className="mb-3">
          <label for="category" className="form-label">
            Category
          </label>
          <input
            type="text"
            value={newProduct.category}
            onChange={handleInput}
            name="category"
            className="form-control"
            id="description"
          />
        </div>

        <div className="mb-3">
          <label for="image" className="form-label">
            Image
          </label>
          <input
            type="file"
            // value={newProduct.image}
            onChange={handlImageFile}
            name="image"
            className="form-control"
            id="image"
          />
        </div>
        <div className="mb-3">
          <label for="image" className="form-label">
            Image Preview:
          </label>
          {pimage && <img src={pimage} alt="loading" />}
        </div>

        {/* <div className="mb-3">
    <label for="rating" className="form-label">Rating</label>
    <input type="text" value={newProduct.} className="form-control" id="rating" />
  </div> */}

        <button type="submit" className="btn btn-primary mx-5">
          Add Product
        </button>
        <button className="btn btn-secondary mx-5" onClick={() => navigate("/admin")}>
          Go to Admin
        </button>
      </form>
    </div>
  );
}

export default AdminAddProduct;