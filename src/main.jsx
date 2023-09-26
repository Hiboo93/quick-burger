import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, BrowserRouter,} from "react-router-dom";
// import PageLogin from "./components/pages/login/PageLogin.jsx";
// import OrderPage from "./components/pages/orderPage/OrderPage.jsx";
// import ErrorPage from "./components/pages/errorPage/ErrorPage.jsx";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="/login" element={<PageLogin />} />
//       <Route path="/order/:username" element={<OrderPage />} />
//       <Route path="*" element={<ErrorPage />} />
//     </Route>
//   )
// );

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

