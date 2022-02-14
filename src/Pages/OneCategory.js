import Category from "../Components/Category";
import Product from "../Components/Product";
import { product1, product2, product3, product4, product5, product6, product7, product8, product9, product10 } from "../Docs/productsDescription"
import peachcake from "../Images/peachcake.png"
import breadcake from "../Images/breadcake.jpeg"
import nutcake from "../Images/nutcake.jpeg"
import cherrycake from "../Images/cherrycake.jpeg"
import chocolatecake from "../Images/chocolatecake.jpeg"
import limecake from "../Images/limecake.jpeg"
import walnutcake from "../Images/walnutcake.jpeg"
import redcake from "../Images/redcake.jpeg"
import strawberrycake from "../Images/strawberrycake.jpeg"
import raisincake from "../Images/raisincake.jpeg"

function OneCategory() {
    return (
        <div>
            <div className="row">
                <div className="col mt-3 mb-3">
                    <h1>Cakes to order</h1>
                </div>
            </div>

            <div className="row">
                <Category />
            </div>

            <div className="row mt-4 justify-content-between">

                <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 mt-4">
                    <Product img={peachcake}
                        title={product1.title}
                        price={product1.price} />
                </div>

                <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 mt-4">
                    <Product img={breadcake}
                        title={product2.title}
                        price={product2.price} />
                </div>
                <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 mt-4">
                    <Product img={nutcake}
                        title={product3.title}
                        price={product3.price} />
                </div>
                <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 mt-4">
                    <Product img={cherrycake}
                        title={product4.title}
                        price={product4.price} />
                </div>
                <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 mt-4">
                    <Product img={chocolatecake}
                        title={product5.title}
                        price={product5.price} />
                </div>
            </div>
            <div className="row mt-4 mb-4 justify-content-between">

                <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 mt-4">
                    <Product img={limecake}
                        title={product6.title}
                        price={product6.price} />
                </div>
                <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 mt-4">
                    <Product img={walnutcake}
                        title={product7.title}
                        price={product7.price} />
                </div>
                <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 mt-4">
                    <Product img={redcake}
                        title={product8.title}
                        price={product8.price} />
                </div>
                <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 mt-4">
                    <Product img={strawberrycake}
                        title={product9.title}
                        price={product9.price} />
                </div>
                <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 mt-4">
                    <Product img={raisincake}
                        title={product10.title}
                        price={product10.price} />
                </div>
            </div>

        </div>
    )
}

export default OneCategory;