import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteItem, addItem } from "../redux/cart";

const Cart = () => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const removeItem = (product) => {
    dispatch(deleteItem(product));
  };
  const increaseItem = (product) => {
    dispatch(addItem(product));
  };
  console.log(cart);

  const cartItems = cart.map((product) => {
    return (
      <tr key={product.id}>
        <td>
          <img
            src={product.image}
            alt={product.title}
            height="200px"
            width="200px"
          />
        </td>
        <td className="fw-bolder">{product.title}</td>
        <td>₦ {product.price * 700}</td>
        <td>
          <button variant="primary" onClick={() => increaseItem(product)}>
            +
          </button>
          <span className="mx-2">{product.qty}</span>
          <button variant="danger" onClick={() => removeItem(product)}>
            -
          </button>
        </td>
        <td>₦ {product.price * 700 * product.qty}</td>
      </tr>
    );
  });

  const total = cart
    .reduce((acc, product) => acc + product.price * 700 * product.qty, 0)
    .toFixed(2);
  return (
    <>
      {cart.length > 0 ? (
        <div className="container mt-3 py-5">
          <h3 className="py-4">Cart Items</h3>
          <table className="table mt-4">
            <thead>
              <tr>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Item Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems}
              <tr>
                <td colSpan="3">Total:</td>
                <td>₦ {total}</td>
              </tr>
            </tbody>
          </table>
          <div class="text-center">
            <button class="btn btn-outline-dark">Check Out</button>
          </div>
        </div>
      ) : (
        <div className="container mt-3 py-5">
          <h3 className="py-4">Cart Items</h3>
          <p>No items in cart</p>
        </div>
      )}
    </>
  );
};

export default Cart;
