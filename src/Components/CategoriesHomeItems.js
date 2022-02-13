import { Link } from "react-router-dom";

function CategoriesHomeItems(props) {
    const img = props.img;
    const title = props.title;
    const desc = props.description;
    const descShort = desc.slice(0, 250)

    return (
    <div>
        <img src={img} className="card-img-top photo"/>
        <div>
            <h5>{title}</h5>
            <p>{descShort}</p>
            <Link to="/categories" className="btn btn-primary product-btn">View more</Link>
        </div>
    </div>
    )
}

export default CategoriesHomeItems;