import "./FancyBoxImage.css"

function FancyBoxImage(props) {
    const img = props.img;

    return (
        <div className="row">

            <div className="col">
                <a data-fancybox href={img}>
                    <img className="fancy-box-image" src={img} alt=""/>
                </a>
            </div>

        </div>
    )
}

export default FancyBoxImage;