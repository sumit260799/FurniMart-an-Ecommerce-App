import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  AboutPage,
  ErrorPage,
  SingleProductPage,
  CartPage,
  AuthWrapper,
  ProductPage,
  CheckOutPage,
} from "./pages";

const App = () => {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="products/:id" element={<SingleProductPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  );
};

export default App;
