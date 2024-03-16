import { Routes } from "react-router-dom";

import { Route } from "react-router-dom";


import Navbar from "./Componets/NavBar.jsx";
import Home from "./Pages/Home.jsx";
import Cart from "./Pages/Cart.jsx";
import SignIn from "./Componets/Sign_in.jsx";

const App = () => {
    return (<div>
        <div className="bg-slate-900">
            <Navbar/>
        </div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path= "/sign-in" element = {<SignIn /> }/>
        </Routes>
    </div>)
};

export default App;