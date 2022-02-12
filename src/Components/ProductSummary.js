import "./ShippingAddress.css"

function ProductSummary() {
    const imageStyle = {maxWidth: '200px', background: 'white', padding: '1px'};
    return (
        <div className="container-fluid">
            <form>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Product</th>
                            <th scope="col">Qty</th>
                            <th scope="col">Price</th>
                            <th scope="col">Total</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"><img src="/images/product-cake-6.jpg" alt="cake" style={imageStyle} /></th>
                            <td className="align-middle">Red velvet</td>
                            <td className="align-middle">
                                <div class="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <button className="btn btn-outline-secondary" type="button">-</button>
                                    </div>
                                    <input style={{ width: "30px", borderRadius: 5 }}></input>
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button">+</button>
                                    </div>
                                </div>
                            </td>
                            <td className="align-middle">17.00 €</td>
                            <td className="align-middle h6">17.00 €</td>
                            <td className="align-middle"><button type="button" class="btn btn-danger">Remove</button></td>
                        </tr>
                        <tr>
                            <th scope="row"><img src="/images/product-cake-2.jpg" alt="cake" style={imageStyle} /></th>
                            <td className="align-middle">Strawberry cheesecake</td>
                            <td className="align-middle">
                                <div class="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <button className="btn btn-outline-secondary" type="button">-</button>
                                    </div>
                                    <input style={{ width: "30px", borderRadius: 5 }}></input>
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button">+</button>
                                    </div>
                                </div>
                            </td>
                            <td className="align-middle">15.00 €</td>
                            <td className="align-middle h6">15.00 €</td>
                            <td className="align-middle"><button type="button" class="btn btn-danger">Remove</button></td>
                        </tr>
                        <tr>
                            <th scope="row"><img src="/images/product-cake-4.jpeg" alt="cake" style={imageStyle} /></th>
                            <td className="align-middle">Macarons</td>
                            <td className="align-middle">
                                <div class="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <button className="btn btn-outline-secondary" type="button">-</button>
                                    </div>
                                    <input style={{ width: "30px", borderRadius: 5 }}></input>
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button">+</button>
                                    </div>
                                </div>
                            </td>
                            <td className="align-middle">5.00 €</td>
                            <td className ="align-middle h6">5.00 €</td>
                            <td className ="align-middle"><button type="button" class="btn btn-danger">Remove</button></td>
                        </tr>
                    </tbody>
                </table>
                <div className="col-md-10 d-flex justify-content-end">
                    <button className="btn btn-success address-btn" id="address-button" onclick="addAddress()">Proceed to Pay</button>
                </div>
            </form>
        </div>
    )
}

export default ProductSummary;