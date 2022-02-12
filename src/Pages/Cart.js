import ProductSummary from "../Components/ProductSummary";
import ShippingAdress from "../Components/ShippingAddress";
import Total from "../Components/Total";

function Cart() {
    return (
        <div className="row">
             <div className="col">
                <h1>This is Cart</h1>
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <button className="nav-link active" id="nav-products-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-products" type="button" role="tab" aria-controls="nav-products"
                                aria-selected="true">Products</button>
                            <button clclassNameass="nav-link" id="nav-address-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-address" type="button" role="tab" aria-controls="nav-address"
                                aria-selected="false">Address</button>
                            <button className="nav-link" id="nav-summary-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-summary" type="button" role="tab" aria-controls="nav-summary"
                                aria-selected="false">Summary</button>
                        </div>
                    </nav>
                <ProductSummary />
                <ShippingAdress />
                <Total />
            </div>

        </div>
    )
}

export default Cart;