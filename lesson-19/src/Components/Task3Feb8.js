import { useState } from "react"

function Task3Feb8() {
    
    const [inputValue, setInputValue] = useState(10)

    const updateValue = (amount) => {
        setInputValue(inputValue + amount)
    }
    
    const updateInputValue = (event) => {
        const newinputFieldValue = event.target.value
        setInputValue(parseInt(newinputFieldValue))
    }

    return (
        <div className="m-5">
            <h1>Task 3 February 8</h1>
            <button onClick={() => updateValue(-5)}>-5</button>
            <button onClick={() => updateValue(-1)}>-1</button>
            <input type='number' value={inputValue} onChange={updateInputValue}></input>
            <button onClick={() => updateValue(+1)}>+1</button>
            <button onClick={() => updateValue(+5)}>+5</button>
        </div>
    )
}

export default Task3Feb8;