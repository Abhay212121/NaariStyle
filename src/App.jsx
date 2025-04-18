import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Shop from "./components/Shop.jsx";
import Products from "./components/Products";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBagsData } from "./features/apiData/bagsDataSlice.js";
import { fetchTopsData } from "./features/apiData/topsDataSlice.js";
import { fetchDressesData } from "./features/apiData/dressesDataSlice.js";
import { fetchWatchData } from "./features/apiData/watchDataSlice.js";
import { fetchJewelleryData } from "./features/apiData/jewelleriesDataSlice.js";
import { fetchShoeData } from "./features/apiData/shoeDataSlice.js";
import Cart from "./components/Cart.jsx";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBagsData());
    dispatch(fetchTopsData());
    dispatch(fetchDressesData());
    dispatch(fetchShoeData());
    dispatch(fetchWatchData());
    dispatch(fetchJewelleryData());
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/shop"
            element={<Shop />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/products/:category/:id"
            element={<Products />}
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
