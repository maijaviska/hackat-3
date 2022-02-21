import { useState } from "react"

function Task1Feb8() {
    
    const [word, setWord] = useState('Foo')
    const [color, setColor] = useState('blue')

    const applyChanges = () => {

        if (word === 'Foo' && color === 'blue') {
            setWord('Bar')
            setColor('red')

        } else {
            setWord('Foo')
            setColor('blue')
        }

        // setWord(word == 'Foo' ? 'Bar' : 'Foo');
    }     
    
    return (
        <div className="m-5">
            <h1>Task 1 February 8</h1>
            <h5 style={{color}}>{word}</h5>
            <button onClick={applyChanges}>Click to change</button>
        </div>
    )
}

export default Task1Feb8;