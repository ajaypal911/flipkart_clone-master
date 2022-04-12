import React from 'react' 
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { deleteProduct } from '../actions';
// import data from '../data/products'

const Admin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Admin.products);
    const printdata = () => {
        return data?.map((d) => {
          return (
            <tr className="border">
              <td>{d?.id}</td>
              <td>{d?.title}</td>
              <td>{d?.description}</td>
              <td>{d?.price}</td>
                  <td> 
                <button className='btn btn-primary'
                 onClick={()=> navigate(`/AdminEditProduct/${d.id}`)}
                >Edit</button>
                <button className='btn btn-secondary'
                  onClick={() => {
                    dispatch(deleteProduct(d.id));
                  }}
                >Delete</button>
               </td>
            </tr>
          );
        })
    }
  return (
    <> 
      <br />
      <div>
        <div className="mx-5" style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h1>Hello Admin</h1>
          </div>
          <div>
            <button className="btn btn-primary" onClick={() => navigate("/AdminAddProduct")}>
              Add New Product
            </button>
          </div>
        </div>
        <table className="container border">
          <thead className="border">
            <td>Id</td>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            {/* <td>Image</td> */}
            <td>Actions</td>
          </thead>
          <tbody>{printdata()}</tbody>
        </table>
      </div>
    </>
  );
}

export default Admin