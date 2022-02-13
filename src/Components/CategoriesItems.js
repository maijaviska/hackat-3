function CategoriesItems(props) {
    const img = props.img;
    const title = props.title;
    const desc = props.description;

    return (
        <div>

            <div className="row pb-3 mb-3">

                <div className="col-3">            
                    <img src={img} className="img-fluid" />            
                </div>

            <div className="col-9">
                           
                    <h5>{title}</h5>            
                    <p>{desc}</p>            
                
            </div>

        </div>
        </div>
    )
}

export default CategoriesItems;