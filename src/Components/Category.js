import CategoriesItems from "./CategoriesItems";
import {cakes} from "../Docs/categoriesDescription"
import cake from "../Images/cake2.jpg"

function Category() {
    return (
        <div className="row mb-3">

            <div className="col">
                <CategoriesItems img={cake}
                                    title={cakes.title}
                                    description={cakes.description} />
            </div>

        </div>

    )
}

export default Category;