import "./App.css";
import Header from "./components/header";
import ProductDetails from "./components/Product/productDetails";
import Cart from "./components/Cart/cart";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Product/products";
import NotFound from "./components/notFound";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
