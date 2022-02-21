import CatIpsumText from "../Components/CatIpsumText";
import FancyHover from "../Components/FancyHover";
import fbimage1 from "../Images/pink1.jpeg"
import fbimage2 from "../Images/pink2.jpeg"
import fbimage3 from "../Images/pink3.jpeg"
import fbimage4 from "../Images/pink4.jpeg"
import fbimage5 from "../Images/pink5.jpeg"
import fbimage6 from "../Images/pink6.jpeg"

function Article() {

    return (
        <div className="container text-justify">
            <h2>Super amazing page</h2>
            <div className="row">
                <div className="col-4">
                <div className="row d-flex">
                        <div className="col hide">
                        <FancyHover img={fbimage1} />
                        </div>
                    </div>
                    <div className="row mt-3 d-flex">
                        <div className="col-4 myDIV">
                        <FancyHover img={fbimage1} />
                        </div>
                        <div className="col-4 myDIV">
                        <FancyHover img={fbimage2}/>
                        </div>
                        <div className="col-4 myDIV">
                        <FancyHover img={fbimage3} />
                        </div>
                    </div>
                    <div className="row d-flex my-3">
                        <div className="col-4 myDIV">
                        <FancyHover img={fbimage4} />
                        </div>
                        <div className="col-4 myDIV">
                        <FancyHover img={fbimage5} />
                        </div>
                        <div className="col-4 myDIV">
                        <FancyHover img={fbimage6} />
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <CatIpsumText />
                </div>
            </div>
        </div>
    )
}

export default Article;