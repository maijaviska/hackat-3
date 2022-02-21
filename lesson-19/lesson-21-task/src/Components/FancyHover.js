import "./FancyHover.css"

function FancyHover(props) {
    const img = props.img;

    return (
        <div className="row">
            <div className="col">
                {/* <a href={img}> */}
                    <img className="hover-image" src={img} alt=""/>
                {/* </a> */}
            </div>
        </div>
    )
}

export default FancyHover;