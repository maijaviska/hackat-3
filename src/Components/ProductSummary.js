import { useState } from "react";
import "./ShippingAddress.css"

function ProductSummary() {
    const [number, setNumber] = useState(0)

    const countMinus =() => {
        let newValue = number - 1
        if (newValue < 0) {
            newValue = 0;
        }
        setNumber(newValue)
    }

    const countPlus =() => {
        let newValue = number + 1
        setNumber(newValue)
    }
    const [number2, setNumber2] = useState(0)

    const countMinus2 =() => {
        let newValue = number2 - 1
        if (newValue < 0) {
            newValue = 0;
        }
        setNumber2(newValue)
    }

    const countPlus2 =() => {
        let newValue = number2 + 1
        setNumber2(newValue)
    }
    const [number3, setNumber3] = useState(0)

    const countMinus3 =() => {
        let newValue = number3 - 1
        if (newValue < 0) {
            newValue = 0;
        }
        setNumber3(newValue)
    }

    const countPlus3 =() => {
        let newValue = number3 + 1
        setNumber3(newValue)
    }

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
                                        <button onClick={countMinus} className="btn btn-outline-secondary" type="button">-</button>
                                    </div>
                                    <input value={number} style={{ width: "30px", borderRadius: 5 }}></input>
                                    <div className="input-group-append">
                                        <button onClick={countPlus} className="btn btn-outline-secondary" type="button">+</button>
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
                                        <button onClick={countMinus2} className="btn btn-outline-secondary" type="button">-</button>
                                    </div>
                                    <input value={number2} style={{ width: "30px", borderRadius: 5 }}></input>
                                    <div className="input-group-append">
                                        <button onClick={countPlus2} className="btn btn-outline-secondary" type="button">+</button>
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
                                        <button onClick={countMinus3} className="btn btn-outline-secondary" type="button">-</button>
                                    </div>
                                    <input value={number3} style={{ width: "30px", borderRadius: 5 }}></input>
                                    <div className="input-group-append">
                                        <button onClick={countPlus3} className="btn btn-outline-secondary" type="button">+</button>
                                    </div>
                                </div>
                            </td>
                            <td className="align-middle">5.00 €</td>
                            <td className ="align-middle h6">5.00 €</td>
                            <td className ="align-middle"><button type="button" class="btn btn-danger">Remove</button></td>
                        </tr>
                        <tr> 
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <th class="text-blue h5">Total: <span class="text-black h2" id="cartTotal">37.00 €</span></th> 
                        <td></td>       
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