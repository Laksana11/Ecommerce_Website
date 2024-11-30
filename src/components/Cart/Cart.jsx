import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeFromCart } from "../../redux/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="item-details">
            <img
              src={item.image} // Ensure image URL is part of the product object
              alt={item.name}
              className="item-image"
            />
            <div>
              <h3 className="item-name">{item.name}</h3>
              <p className="item-size">{item.size || "250ml"}</p>
              <p
                className="remove-item"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </p>
            </div>
          </div>
          <div className="item-actions">
            <p className="item-price">${item.price.toFixed(2)}</p>
            <div className="quantity-controls">
              <button
                className="quantity-btn"
                onClick={() =>
                  dispatch(
                    updateQuantity({
                      id: item.id,
                      quantity: Math.max(item.quantity - 1, 1),
                    })
                  )
                }
              >
                -
              </button>
              <input
                type="number"
                className="quantity-input"
                value={item.quantity}
                onChange={(e) =>
                  dispatch(
                    updateQuantity({
                      id: item.id,
                      quantity: Math.max(Number(e.target.value), 1),
                    })
                  )
                }
              />
              <button
                className="quantity-btn"
                onClick={() =>
                  dispatch(
                    updateQuantity({ id: item.id, quantity: item.quantity + 1 })
                  )
                }
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="cart-footer">
        <p className="total-text">Sub-Total</p>
        <p className="total-amount">${total.toFixed(2)}</p>
      </div>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
};

export default Cart;
