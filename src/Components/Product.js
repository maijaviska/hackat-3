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
                    <h5 className="card-title">{title}</h5>
                    <p className="product-price">{price}</p>
                    <Link to="/product-page" className="btn btn-primary product-btn">Add to cart</Link>
                </div>

            </div>
        </div>
    );
}

export default Product;