import "./ShippingAddress.css"

function ProductSummary() {
    return (
        <div className="container-fluid">
            <form>
                <div class="row m-3 ">
                    <div class="col-md-6 px-3 pameginam">
                        <div class="form-outline">
                            <div class="col-xxl-11 col-xl-10 col-md-10 col-sm-9">
                                <h5 for="username">Shipping address</h5><br />
                                <textarea id="username-input" name="input-message" rows="5" cols="76"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 d-flex justify-content-end">
                    <button class="btn btn-success address-btn" id="address-button" onclick="addAddress()">Add Address</button>
                </div>
            </form>
        </div>
    )
}

export default ProductSummary;