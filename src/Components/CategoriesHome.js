
import {cakes, macaroons, cupcakes} from "../Docs/categoriesDescription"
import cake from "../Images/cake2.jpg"
import mac from "../Images/macarron.jpg"
import cup from "../Images/cupcake.jpg"
import CategoriesHomeItems from "./CategoriesHomeItems"

function CategoriesHome() {
    return (
        <div className="container">
            <div className="row mb-3 mt-3">

                <div className="col">
                    <CategoriesHomeItems img={cake}
                                        title={cakes.title}
                                        description={cakes.description} />
                </div>

                <div className="col">
                    <CategoriesHomeItems img={mac}
                                        title={macaroons.title}
                                        description={macaroons.description} />
                </div>

            
                <div className="col">
                    <CategoriesHomeItems img={cup}
                                        title={cupcakes.title}
                                        description={cupcakes.description} />
                </div>            
            </div>
        </div>
    )
}

export default CategoriesHome;