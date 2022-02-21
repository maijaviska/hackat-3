import getCars from "../API/getCars";
import { useState } from "react"

function Task4() {
    
    const [selectedCar, setSelectedCar] = useState('');

    const cars = getCars()
    const list = [];

    for (const i in cars) {
        const car = cars[i]
        let color = 'black'

        if (car === selectedCar) {
            color = 'red'
        }

        list.push(<li key={i} style={{color:color}}>{car}</li>)
    }

    const changeCar = (event) => {
        setSelectedCar(event.target.value)
    }

    return (
        <div className="row m-5">
            <div className="">
                <h1>Task 4 February 15</h1>
            </div>
            <ul>
                {list}
            </ul>
            <div className="col-4">
            <input type='text' value={selectedCar} onChange={changeCar}></input>
            </div>
        </div>
    )
}

export default Task4;