import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeFromCart } from "../../redux/Slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>${item.price}</p>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  quantity: Number(e.target.value),
                })
              )
            }
          />
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}
      <div>Total: ${total}</div>
    </div>
  );
};

export default Cart;
