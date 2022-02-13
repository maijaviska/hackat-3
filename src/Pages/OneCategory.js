import Category from "../Components/Category";
import Product from "../Components/Product";

function OneCategory() {
    return (
        <div>
            <div className="row">
                <div className="col">
                    <h1>Cakes to order</h1>
                </div>
            </div>

            <div className="row">
                <Category />
            </div>

            <div className="row mt-4 justify-content-between">
                <div className="col-2">
                    <Product />
                </div>
                <div className="col-2">
                    <Product />
                </div>
                <div className="col-2">
                    <Product />
                </div>
                <div className="col-2">
                    <Product />
                </div>
                <div className="col-2">
                    <Product />
                </div>
            </div>
            <div className="row mt-4 justify-content-between">
                <div className="col-2">
                    <Product />
                </div>
                <div className="col-2">
                    <Product />
                </div>
                <div className="col-2">
                    <Product />
                </div>
                <div className="col-2">
                    <Product />
                </div>
                <div className="col-2">
                    <Product />
                </div>
            </div>

        </div>
    )
}

export default OneCategory;