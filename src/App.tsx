import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";
import Cart from "./pages/cart";
import Concat from "./pages/concat";
import Favorite from "./pages/favorite";
import LogIn from "./pages/logIn";
import Register from "./pages/register";
import AllProducts from "./pages/allProducts";
import Audio from "./pages/audio";
import Phones from "./pages/phones";
import TV from "./pages/tv";
import Gaming from "./pages/gaming";
import Appliances from "./pages/Appliances";
import Laptops from "./pages/laptops";
import BestSellingPage from "./pages/bestSellingPage";
import Footer from "./components/footer";

function App() {
  return (
    <div className=" overflow-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/concat" element={<Concat />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/allProducts" element={<AllProducts />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/TV" element={<TV />} />
        <Route path="/Gaming" element={<Gaming />} />
        <Route path="/appliances" element={<Appliances />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="/bestSelling" element={<BestSellingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
