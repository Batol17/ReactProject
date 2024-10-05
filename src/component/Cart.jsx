import React from 'react';
import { Button, Container, Row, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { FaTrash } from "react-icons/fa";
import { increment, decrement, removeFromCart } from "../redux/cartReducer.js";
import { Link } from 'react-router-dom';

function Cart() {
  const products = useSelector(state => state.cart.products);
  const dispatch = useDispatch();

  return (
    <Container>
      <h2 className='my-5 p-3 mx-auto fs-1 bg-info' style={{ fontFamily: 'emoji', fontStyle: 'italic', width: 'fit-content',borderRadius:'6%' }}>Your Cart</h2>

      {products.length === 0 ? (
        <p className='fs-3'>No products in cart</p>
      ) : (
        <>
        <Table>
          <thead>
            <tr>
              <th>Number</th>
              <th>Product Image</th>
              <th>Product Title</th>
              <th>Price</th>
              <th>Count</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
            <td >
                <div className="d-flex align-items-center justify-content-center">
                  <Button className='me-1' onClick={() => dispatch(increment({ id: product.id }))}>+</Button>
                  <span className="badge bg-dark text-white mx-2 rounded-pill">{product.quantity}</span>
                  <Button className='ms-1 bg-danger border-danger' onClick={() => dispatch(decrement({ id: product.id }))}>-</Button>
           
                </div>
             </td>

                <td><img src={product.image} alt={product.title} className='handle-img' /></td>
                <td className='w-50'>{product.title}</td>
                <td className='text-success'>{product.price}</td>
                <td className='text-danger'>{product.rating.count}</td>
                <td className='text-danger fs-3'><FaTrash onClick={()=>dispatch(removeFromCart({id: product.id}))}/></td>
              </tr>
            ))}
          </tbody>
        </Table>
         <Link to="/">
         <button
             style={{ border: "none" }}
             className="btn btn-primary mx-2 bg-info"
         >
             Home Page
         </button>
     </Link>
</>
      )}
    </Container>
  );
}

export default Cart;
