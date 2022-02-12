import Product from "../Components/Product";

function OneCategory() {
    return (
        <div>
            <div className="row">
                <div className="col">
                    <h1>This is Cakes 2 order page (1 category)</h1>
                </div>
            </div>

            <div className="row">
                {/* // here will be the Component for one category */}
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