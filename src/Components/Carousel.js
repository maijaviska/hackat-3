import "./Carousel.css"

function Carousel() {
    return (
        <div classNameName="container-fluid">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>

                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100 c-image" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/2337816/pexels-photo-2337816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100 c-image" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/3592423/pexels-photo-3592423.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100 c-image" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/1005406/pexels-photo-1005406.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100 c-image" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;