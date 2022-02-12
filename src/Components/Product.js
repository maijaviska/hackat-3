import "./Product.css"

function Product() {
    return (
        <div className="container-fluid">
            <div className="card text-center">
                <img src="https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Product title</h5>
                    <p className="product-price">Product price</p>
                    <a href="#" className="btn btn-primary product-btn">Add to cart</a>
                </div>
            </div>
        </div>
    );
}

export default Product;