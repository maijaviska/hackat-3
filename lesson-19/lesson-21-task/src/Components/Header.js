import { Link } from "react-router-dom";

function Header() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#">Catland</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-white" id="navbarNavAltMarkup">
                        <div className="navbar-nav text-white">
                            <Link className="nav-link menu text-white" to="/">Home</Link>
                            <Link className="nav-link menu text-white" to="/article">Article</Link>
                            <Link className="nav-link menu text-white" to="/tags">Tags</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Header;