import { Route, Routes } from "react-router-dom";
import "./App.css";
import PageLogin from "./components/pages/login/PageLogin.jsx";
import OrderPage from "./components/pages/orderPage/OrderPage.jsx";
import ErrorPage from "./components/pages/errorPage/ErrorPage.jsx"

function App() {
  return (
      <Routes>
        <Route path="/" element={<PageLogin/>} />
        <Route path="/order/:username" element={<OrderPage/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
  );
}
export default App;
