import { Routes } from "react-router-dom";

import { Route } from "react-router-dom";


import Navbar from "./Componets/NavBar.jsx";
import Home from "./Pages/Home.jsx";
import Cart from "./Pages/Cart.jsx";

const App = () => {
    return (<div>
        <div className="bg-slate-900">
            <Navbar/>
        </div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart/>} />
        </Routes>
    </div>)
};

export default App;