import { Link } from "react-router-dom";
import logo from "../Images/purrfat-logo.png"


function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-color">
            <img src={logo} id="logo" className="nav-item img-responsive logo" alt="Purrfat Logo" />
                <div className="container">
                    <div className="navbar-collapse d-flex justify-content-end" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link menu" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link menu" to="/categories">What we are baking</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link menu" to="/cakes">Cakes to order</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link menu" to="/cart">Shopping cart</Link>
                                </li>
                                
                            </ul>
                        </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;