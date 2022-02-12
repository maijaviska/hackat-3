import { Route, Routes } from "react-router-dom";
import Cart from "../Pages/Cart";
import Categories from "../Pages/Categories";
import Home from "../Pages/Home";
import OneCategory from "../Pages/OneCategory";

function Content() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/cakes" element={<OneCategory />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    )
}

export default Content;