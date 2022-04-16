import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProductInfo from "./pages/ProductInfo";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./stylesheets/Layout.css";
import "./stylesheets/Product.css";
import "./stylesheets/Authentication.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" exact element={<HomePage></HomePage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
        <Route
          path="/productinfo/:productId"
          element={<ProductInfo></ProductInfo>}
        ></Route>
        <Route path="/cart" element={<CartPage></CartPage>}></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
