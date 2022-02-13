import "./Product.css"
import { Link } from "react-router-dom";

function Product(props) {
    const img = props.img;
    const title = props.title;
    const price = props.price;

    return (
        <div className="container-fluid">

            <div className="card text-center">

                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <Link className="card-title" to="/product-page">{title}</Link>
                    <p className="product-price">{price}</p>
                    <button className="btn btn-success address-btn" id="address-button" onclick="addAddress()">Add to cart</button>
                </div>

            </div>
        </div>
    );
}

export default Product;