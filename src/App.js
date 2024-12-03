// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import Routes from "./routes/Routes";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Routes />
//       <Footer />
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Box } from "@mui/material";
const App = () => {
  return (
    <Router>
      <Box
        sx={{
          flexDirection: "column",
          minHeight: "75vh",
        }}
      >
        <Header />
        <Routes />
      </Box>
      <Footer />
    </Router>
  );
};
export default App;
