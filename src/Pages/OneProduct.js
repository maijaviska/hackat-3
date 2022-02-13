import FancyBoxImage from "../Components/FancyBoxImage";

function OneProduct() {
    return (

        <div>

            <h1>One particular product</h1>

            <div className="row mt-3">

                <div className="col-4 first-left">
                    <FancyBoxImage/>
                </div>

                <div className="col">


                <div className="col-8 first-right">
                    Some text
                </div>
            </div>
            </div>

            <div className="row mt-3 mb-3">

                <div className="col-4 first-left">

                    <div className="row d-flex">

                        <div className="col-4 first-left">
                            <FancyBoxImage />
                        </div>

                        <div className="col-4 first-left">
                            <FancyBoxImage />
                        </div>

                        <div className="col-4 first-left">
                            <FancyBoxImage />
                        </div>
                    </div>

                    <div className="row d-flex mt-3">

                        <div className="col-4 first-left">
                            <FancyBoxImage />
                        </div>

                        <div className="col-4 first-left">
                            <FancyBoxImage />
                        </div>

                        <div className="col-4 first-left">
                            <FancyBoxImage />
                        </div>
                    </div>
                </div>

                <div className="col-8 first-right">
                    <h1>This is smaller text</h1>
                </div>
            </div>

        </div>
    )
}

export default OneProduct;