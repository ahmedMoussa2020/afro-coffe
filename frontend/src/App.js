import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import NavBar from "./screens/NavBar";
import ProductScreen from "./screens/ProductScreen";
import ProductView from "./screens/ProductView";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="above-navbar">FREE SHIPPING ON ORDERS OF $35</div>
        {/* <header>
          <Link to="/">Afro Bucks</Link>
        </header> */}
        <main>
    <NavBar />

          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/productview/" element={<ProductView />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
