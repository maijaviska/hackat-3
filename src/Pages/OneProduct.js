import FancyBoxImage from "../Components/FancyBoxImage";
import OneProductDescription from "../Components/OneProductDescription";
import OneProductDescShort from "../Components/OneProductDescShort";
import { fancyimage1, fancyimage2, fancyimage3, fancyimage4, fancyimage5, fancyimage6, fancyimage7 } from "../Docs/oneproductfb"
import fbimage1 from "../Images/fbnutcake1.jpeg"
import fbimage2 from "../Images/fbnutcake2.jpeg"
import fbimage3 from "../Images/fbnutcake3.jpeg"
import fbimage4 from "../Images/fbnutcake4.jpeg"
import fbimage5 from "../Images/fbnutcake5.jpeg"
import fbimage6 from "../Images/fbnutcake6.jpeg"
import fbimage7 from "../Images/fbnutcake7.jpeg"
import "./Cart.css"

function OneProduct() {
    return (

        <div>

            <h1>Nut cake</h1>

            <div className="row mt-3">

                <div className="col-4">
                    <FancyBoxImage img={fbimage6} />
                </div>

                <div className="col-8">
                    <OneProductDescription />
                </div>
            </div>

            <div className="row mt-3 mb-3">

                <div className="col-4 first-left">

                    <div className="row d-flex">

                        <div className="col-4">
                            <FancyBoxImage img={fbimage1} />
                        </div>

                        <div className="col-4">
                            <FancyBoxImage img={fbimage2} />
                        </div>

                        <div className="col-4">
                            <FancyBoxImage img={fbimage3} />
                        </div>
                    </div>

                    <div className="row d-flex mt-3">

                        <div className="col-4">
                            <FancyBoxImage img={fbimage4} />
                        </div>

                        <div className="col-4">
                            <FancyBoxImage img={fbimage5} />
                        </div>

                        <div className="col-4">
                            <FancyBoxImage img={fbimage7} />
                        </div>
                    </div>

                    <div className="row d-flex mt-3 ">

                        <div className="col-6 text-end">
                            <p className="one-product-price">9.99 Eur</p>
                        </div>

                        <div className="col-6 text-end">
                            <button className="btn btn-success address-btn" id="address-button" onclick="addAddress()">Add to cart</button>
                        </div>

                    </div>



                </div>

                <div className="col-8">
                    <OneProductDescShort />
                </div>
            </div>

        </div>
    )
}

export default OneProduct;