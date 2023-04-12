import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./component/Products";
import { useEffect, useState } from "react";
// import logo from "./images/DA Collections-logos__transparent 3.png";
import style from "./style/logo.module.css";
import Preloader from "./Preloader/Preloader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </Router>
      )}
    </>
  );
}
export default App;
