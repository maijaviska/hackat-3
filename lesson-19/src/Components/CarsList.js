import getCars from "../API/getCars";

function CarsList() {

    const cars = getCars()
    const list = [];

    for (const i in cars) {
        const car = cars[i]
        list.push(<li>{car}</li>)
    }

    return (
        <div className="mx-5">
            <ul>
                {list}
            </ul>
        </div>
    )
}

export default CarsList;