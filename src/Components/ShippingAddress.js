import "./ShippingAddress.css"

function ShippingAddress() {
    return (
        <form>
            <div className="row m-3">
                <div className="px-3 col-for-ship-area">
                    <div className="form-outline">
                        <div className="parent-for-textarea">
                            <h5 for="username">Shipping address</h5><br />
                            <textarea id="username-input" name="input-message" rows="" cols=""></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ShippingAddress;