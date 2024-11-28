import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import ProductList from "./components/Products/ProductList";
import Cart from "./components/Cart/Cart";

const App = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <Router>
      <div>
        <header>
          <nav>
            <h1>E-Commerce App</h1>
            {user && <p>Welcome, {user.name}!</p>}
          </nav>
        </header>

        <main>
          <Routes>
            {!user ? (
              <>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
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
