import LoginForm from "../components/authentication/LoginForm";

const Login = () => {
  return (
    <div className={"loginContainer"}>
      <LoginForm />
    </div>
  );
};

export default Login;
// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Logo from "src/assets/logo.png";

// export default function LoginNavBar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar
//         position="static"
//         color="common"
//         sx={{
//           height: "7vh",
//           background:
//             "linear-gradient(89.78deg, theme.palette.shadow.main 0%,theme.palette.secondary.light 100%)",
//           boxShadow: "0px 4px 20px theme.palette.common.black",
//         }}
//       >
//         <Toolbar sx={{ alignItems: "center", justifyContent: "center" }}>
//           <img src={Logo} alt="Logo" height={"55rem"} />
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
