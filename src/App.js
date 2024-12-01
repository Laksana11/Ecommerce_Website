// App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes"; // Import Routes
import Header from "./components/Header"; // Import Header

const App = () => {
  return (
    <Router>
      <Header /> {/* Add Header to the top of the page */}
      <Routes /> {/* Add routes for different pages */}
    </Router>
  );
};

export default App;
