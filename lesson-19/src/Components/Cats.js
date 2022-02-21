import getCats from "../API/getCats";
import "./Cats.css"
import "../Components/Cats.css"

function Cats() {

    const cats = getCats()
    const catList = [];

    for (const i in cats) {
        const cat = cats[i]

        catList.push(
            <div key={i}>
                <div className="col card cat-card mt-4">
                    <img src={cat.image} style={{ border: '3px' }} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{cat.title}</h5>
                        <p className="card-text">{cat.description}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <h1 className="container mt-5 mx-5">Task 1</h1>
            <div className="row d-flex mx-5">
                <div className="col-3">
                {catList[0]}
            </div>
            <div className="col-3">
                {catList[1]}
            </div>
            <div className="col-3">
                {catList[2]}
            </div>
            </div>

        </div>
    )
}

export default Cats;