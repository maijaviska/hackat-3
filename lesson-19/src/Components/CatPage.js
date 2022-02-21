import Cats from "./Cats";

function CatPage() {

    return (
        <div className="row d-flex">
            <div className="col">
                <Cats />
            </div>
            <div className="col">
                <Cats />
            </div>
            <div className="col">
                <Cats />
            </div>
        </div>
    )

}

export default CatPage;