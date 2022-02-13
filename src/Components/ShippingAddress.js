import "./ShippingAddress.css"

function ShippingAddress() {
    return (
        <div className="container-fluid">
            <form>
                <div class="row m-3">
                    <div class="px-3 col-for-ship-area">
                        <div class="form-outline">
                            <div class="parent-for-textarea">
                                <h5 for="username">Shipping address</h5><br />
                                <textarea id="username-input" name="input-message" rows="" cols=""></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ShippingAddress;