function Cakeslider() {
    return (
        <div className="container">
            <div className="d-flex">
                <div className="row" >
                    <div className="col-3 p-1 ">
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="/images/product-cake-1.jpg" alt="cake" className="d-block w-100" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/images/product-cake-2.jpg" alt="cake" className="d-block w-100" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/images/product-cake-3.jpg" alt="cake" className="d-block w-100" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/images/product-cake-4.jpeg" alt="cake" className="d-block w-100" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/images/product-cake-5.jpg" alt="cake" className="d-block w-100" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/images/product-cake-6.jpg" alt="cake" className="d-block w-100" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="p-5">
                            <p> 
                            I love jelly pastry tootsie roll icing I love. Tootsie roll bear claw chupa chups sugar plum fruitcake caramels chocolate bar. I love gummi bears jelly beans marzipan I love tart candy. Danish bonbon I love chupa chups tiramisu sweet I love I love I love. I love croissant gummi bears macaroon jelly beans. Shortbread I love I love jelly beans oat cake soufflé powder. Tiramisu brownie powder ice cream croissant pastry sesame snaps brownie. Pudding jelly-o macaroon tart macaroon chupa chups. Topping chocolate bar liquorice I love cake carrot cake. Powder sesame snaps sugar plum tiramisu pie chupa chups I love. I love jelly cake pastry cake. Apple pie chocolate bar ice cream topping topping sweet. I love cookie I love cookie oat cake. Sweet roll dragée oat cake cheesecake tiramisu lemon drops danish.
                            </p>
                            <p>
                            I love liquorice oat cake wafer powder. Bonbon dragée tart tiramisu candy tootsie roll. Candy canes soufflé cake I love bonbon dessert sesame snaps powder. Toffee I love danish caramels danish I love I love. I love ice cream cake gummi bears cupcake I love pudding. Sesame snaps caramels cake bear claw cotton candy I love. Caramels carrot cake pastry tootsie roll sesame snaps I love cotton candy donut donut. Lollipop marzipan croissant marshmallow dessert apple pie bear claw sesame snaps. Marzipan sesame snaps icing sugar plum croissant gummies I love I love biscuit. Gummies carrot cake chupa chups candy canes bonbon tootsie roll pie. Pastry marshmallow marshmallow tootsie roll croissant halvah. Marshmallow toffee jelly sweet dragée cotton candy topping tootsie roll pastry.
                            </p>
                        </div>

                    </div>
                </div>



            </div>
        </div>
    )
}

export default Cakeslider;