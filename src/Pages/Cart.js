import Cakegallery from "../Components/Cakegalery";
import Cakeslider from "../Components/Cakeslider";
import ProductSummary from "../Components/ProductSummary";
import ShippingAdress from "../Components/ShippingAddress";

function Cart() {
    return (
        <div className="row">
            <div className="col mb-3 mt-3">
                <h1 className="titles">Shopping Cart</h1>

                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Products</button>
                        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Address</button>
                        <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Summary</button>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">

                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-products-tab">
                        <ProductSummary />
                    </div>

                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-address-tab">
                        <div class="row d-flex mb-4 address-row">
                            <div class="col-6 justify-content-end">
                                <ShippingAdress />
                                <button class="btn btn-success address-btn" id="address-button" onclick="addAddress()">Add Address</button>
                            </div>
                            <div class="col-6 justify-content-end">
                                <ShippingAdress />
                                <button class="btn btn-success address-btn" id="address-button" onclick="addAddress()">Add Address</button>                           
                            </div>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-summary-tab">
                        <div class="row">
                            <div class="col-3">
                                <div class="">
                                    <div class="col">
                                        <ShippingAdress />
                                    </div>

                                    <div class="col">
                                        <ShippingAdress />
                                    </div>

                                </div>
                            </div>
                            <div class="col-9">
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