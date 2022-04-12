import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../actions';

const AdminAddProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const products = useSelector((state) => state.products);
    console.log("products length",products)
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
  return (
    <div className="container col-6">
      <center>
        <h3>Admin Panel - Add Product</h3>
      </center>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="title" class="form-label">
            Title
          </label>
          <input
            type="text"
            value={newProduct.title}
            onChange={handleInput}
            name="title"
            class="form-control"
            id="title"
          />
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">
            Price
          </label>
          <input
            type="text"
            value={newProduct.price}
            onChange={handleInput}
            name="price"
            class="form-control"
            id="price"
          />
        </div>

        <div class="mb-3">
          <label for="description" class="form-label">
            Description
          </label>
          <input
            type="text"
            value={newProduct.description}
            onChange={handleInput}
            name="description"
            class="form-control"
            id="description"
          />
        </div>

        <div class="mb-3">
          <label for="category" class="form-label">
            Category
          </label>
          <input
            type="text"
            value={newProduct.category}
            onChange={handleInput}
            name="category"
            class="form-control"
            id="description"
          />
        </div>

        <div class="mb-3">
          <label for="image" class="form-label">
            Image
          </label>
          <input
            type="file"
            value={newProduct.image}
            onChange={handleInput}
            name="image"
            class="form-control"
            id="image"
          />
        </div>

        {/* <div class="mb-3">
    <label for="rating" class="form-label">Rating</label>
    <input type="text" value={newProduct.} class="form-control" id="rating" />
  </div> */}

        <button type="submit" class="btn btn-primary mx-5">
          Add Product
        </button>
        <button class="btn btn-secondary mx-5" onClick={() => navigate("/admin")}>
          Go to Admin
        </button>
      </form>
    </div>
  );
}

export default AdminAddProduct;