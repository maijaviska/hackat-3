import FancyBoxImage from "../Components/FancyBoxImage";
import "./ProductPage.css"

function ProductPage() {
    return (
        <div className="container-fluid">

            <div className="row">

                <div className="col-3 first-left">
                    <h1>This is Large image left</h1>
                    <FancyBoxImage />
                </div>

                <div className="col-9 first-right">
                    <h1>This is large text</h1>
                </div>
            </div>

            {/* <div className="row">

                <div className="col-3 second-left">
                    <h1>These ar 6 images left</h1>
                    <FancyBoxImage />
                </div>

                <div className="col-9 second-right">
                    <h1>This is smaller text</h1>
                </div>

            </div> */}

        </div>
    )
}

export default ProductPage;