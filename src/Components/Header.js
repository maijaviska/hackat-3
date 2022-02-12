import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light navbar-color">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/categories">What we make</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/features">Cakes to order</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/features">Shopping cart</Link>
                                </li>
                            </ul>
                        </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;