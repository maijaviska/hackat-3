import BillingAddress from "../Components/BillingAddress";
import Cakegallery from "../Components/Cakegalery";
import Cakeslider from "../Components/Cakeslider";
import ProductSummary from "../Components/ProductSummary";
import ShippingAdress from "../Components/ShippingAddress";

function Cart() {
    return (
        <div className="row">
            <div className="col">
                <h2>Shopping Cart</h2>

                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Products</button>
                        <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Address</button>
                        <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Summary</button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">

                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-products-tab">
                        <ProductSummary />
                    </div>

                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-address-tab">
                        
                        <div className="row d-flex mb-4 address-row">
                            
                            <div className="col justify-content-end">
                                <div className="">
                                    <ShippingAdress />
                                </div>
                                <div className="">
                                    <button className="btn btn-success address-btn" id="address-button" onclick="addAddress()">Add Address</button>
                                </div>
                            </div>

                            <div className="col justify-content-end">
                                <div className="">
                                    <BillingAddress />
                                </div>
                                <div className="">
                                    <button className="btn btn-success address-btn" id="address-button" onclick="addAddress()">Add Address</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-summary-tab">
                        <div className="row">
                            <div className="col-3">
                                <div className="">
                                    <div className="col">
                                        <ShippingAdress />
                                    </div>

                                    <div className="col">
                                        <ShippingAdress />
                                    </div>

                                </div>
                            </div>
                            <div className="col-9">
                                <ProductSummary />
                            </div>
                        </div>
                    </div>
                </div>

                <Cakeslider />
                <Cakegallery />
            </div>

        </div>
    )
}

export default Cart;