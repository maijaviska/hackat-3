import { useState } from "react";

function Task3() {
    
    const [iterationNumber, setIterationNumber] = useState(10);
    const itemsList = [];

    for (let i = 1; i <= iterationNumber; i++) {

        let text = ''

        if (i % 2 === 0) {
            text = 'Fizz';

        } else if (i % 3 === 0) {
            text = 'Bazz';

        } else if (i % 2 === 0 && i % 3 === 0) {
            text = 'FizzBazz';

        } else {
            text = i;
        }

        itemsList.push(
            <li key={i}>
                {text}
            </li>   
        )
    }

    const updateIterationNumber = (event) => {
        const newIterationNumber = parseInt(event.target.value)
        setIterationNumber(newIterationNumber)
    }

    return (
        <div className="container mx-5">
            <h1 className="mt-5">Task 3</h1>

            <div className="row">
                <input type="number" value={iterationNumber} onChange={updateIterationNumber}/>
            </div>
            <div>
                {itemsList}
            </div>
        </div>
    )
}

export default Task3;