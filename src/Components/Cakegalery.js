import "./Cakegalery.css"

function Cakegallery() {
    const imageStyle = {maxWidth: '200px', background: 'white', padding: '1px'};

    return (
        <div>
            <h2>Product 1</h2>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <a data-fancybox href="/images/product-cake-1.jpg">
                            <img src="/images/product-cake-1.jpg" alt="cake" style={imageStyle} />
                        </a>

                        <a data-fancybox href="/images/product-cake-2.jpg">
                            <img src="/images/product-cake-2.jpg" alt="cake" style={imageStyle} />
                        </a>

                        <a data-fancybox href="/images/product-cake-3.jpg">
                            <img src="/images/product-cake-3.jpg" alt="cake" style={imageStyle} />
                        </a>
                    </div>

                </div>
                <div className="row">
                    <div className="col">
                        <a data-fancybox href="/images/product-cake-4.jpeg">
                            <img src="/images/product-cake-4.jpeg" alt="cake" style={imageStyle} />
                        </a>

                        <a data-fancybox href="/images/product-cake-5.jpg">
                            <img src="/images/product-cake-5.jpg" alt="cake" style={imageStyle} />
                        </a>

                        <a data-fancybox href="/images/product-cake-6.jpg">
                            <img src="/images/product-cake-6.jpg" alt="cake" style={imageStyle} />
                        </a>
                    </div>
                    <div className="row d-flex p-5" id="priceLine">
                        <div className="col-md-6 d-flex justify-content-end">
                            <div className="priceImg col-sm-8">10.00 €</div>
                            <button className="btn btn-success address-btn" id="address-button" onclick="addAddress()">Add to
                                cart</button>
                        </div>

                    </div>

                </div>



            </div>

        </div>
    )
}

export default Cakegallery;