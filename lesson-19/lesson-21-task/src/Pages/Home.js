import PricingCard from "../Components/PricingCard";

function Home() {
    return (
        <div className="row d-flex mt-5 justify-content-evenly">
            <div className="col-3">
                <PricingCard />
            </div>
            <div className="col-3">
                <PricingCard />
            </div>
            <div className="col-3">
                <PricingCard />
            </div>
        </div>
    )
}

export default Home;