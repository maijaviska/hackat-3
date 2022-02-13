import logo from "../Images/purrfat-logo.png"

function Footer() {
    return (
        <div>
            <footer className="navbar navbar-color">
                <div className="container d-flex justify-content-center">
                    <p className="text-center foot">&copy; 2022 PurrFat Cakes. All rights reserved.</p>             
                </div>
                
                <div>
                    <img src={logo} id="logo" className="nav-item img-responsive logo" alt="Purrfat Logo" />
                </div>      
        </footer>
        </div>
    )
}

export default Footer;