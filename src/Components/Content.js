import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";

function Content() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />} />
            
            </Routes>
        </div>
    )
}

export default Content;