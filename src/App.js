import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import ProductList from "./components/Products/ProductList";
import Cart from "./components/Cart/Cart";
import CartSummary from "./components/Cart/CartSummary";

const App = () => {
  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.cart.cart);

  return (
    <Router>
      <div>
        <header>
          <nav>
            <h1>E-Commerce App</h1>
            {user && <p>Welcome, {user.name}!</p>}
            <Link to="/cart">
              <button>
                Go to Cart {cart.length > 0 && `(${cart.length})`}
              </button>
            </Link>
          </nav>
        </header>

        <main>
          <Routes>
            {!user ? (
              <>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<Navigate to="/login" />} />
              </>
            ) : (
              <>
                <Route path="/" element={<ProductList />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<Navigate to="/" />} />
              </>
            )}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
