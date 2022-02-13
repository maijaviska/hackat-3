import CategoriesItems from "../Components/CategoriesItems";
import {cakes, macaroons, cupcakes} from "../Docs/categoriesDescription"

function Categories() {
    return (
        <div className="row">
             <div className="col">
                <h1>What we are making</h1>                
            </div>

        <div className="row mb-3">

            <div className="col">
                <CategoriesItems img={cakes.img}
                                    title={cakes.title}
                                    description={cakes.description} />
            </div>

        </div>

        <div className="row mb-3">

            <div className="col">
                <CategoriesItems img={macaroons.img}
                                    title={macaroons.title}
                                    description={macaroons.description} />
            </div>

        </div>

        <div className="row mb-3">

            <div className="col">
                <CategoriesItems img={cupcakes.img}
                                    title={cupcakes.title}
                                    description={cupcakes.description} />
            </div>

        </div>

        
        </div>
    )
}

export default Categories;