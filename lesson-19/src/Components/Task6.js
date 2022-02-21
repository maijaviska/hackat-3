import getCars from "../API/getCars";
import { useState } from "react"

function Task6() {

    const [selectedCar, setSelectedCar] = useState('')

    const cars = getCars();

    const showMessage = (event) => {
        setSelectedCar(event.target.value)
    }

    let message = <h5 style={{color: 'orange'}}>Enter car name</h5>

    if (cars.includes(selectedCar)) {
        message = <h5 style={{color: 'green'}}>Car was found</h5>
    } else {
        message = <h5 style={{color: 'red'}}>Car was not found</h5>
    }

    return (
        <div className="row m-5">
            <h1>Task 6 February 15</h1>
            <div className="col-3">
                {message}
                <input type="text" value={selectedCar} onChange={showMessage}></input>
            </div>
        </div>
    )
}

export default Task6;