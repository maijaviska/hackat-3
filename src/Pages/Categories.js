import CategoriesItems from "../Components/CategoriesItems";
import {cakes, macaroons, cupcakes} from "../Docs/categoriesDescription"
import cake from "../Images/cake2.jpg"
import mac from "../Images/macarron.jpg"
import cup from "../Images/cupcake.jpg"

function Categories() {
    return (
        <div className="row">
             <div className="col mb-3 mt-3">
                <h1>What we are baking</h1>                
            </div>

        <div className="row mb-3">

            <div className="col">
                <CategoriesItems img={cake}
                                    title={cakes.title}
                                    description={cakes.description} />
            </div>

        </div>

        <div className="row mb-3">

            <div className="col">
                <CategoriesItems img={mac}
                                    title={macaroons.title}
                                    description={macaroons.description} />
            </div>

        </div>

        <div className="row mb-3">

            <div className="col">
                <CategoriesItems img={cup}
                                    title={cupcakes.title}
                                    description={cupcakes.description} />
            </div>

        </div>

        
        </div>
    )
}

export default Categories;