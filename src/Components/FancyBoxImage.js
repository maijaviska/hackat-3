import "./FancyBoxImage.css"

function FancyBoxImage() {
    return (
        <div className="row">

            <div className="col">
                <a data-fancybox href="https://images.pexels.com/photos/1359328/pexels-photo-1359328.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
                    <img className="fancy-box-image" src="https://images.pexels.com/photos/1359328/pexels-photo-1359328.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                </a>
            </div>

        </div>
    )
}

export default FancyBoxImage;