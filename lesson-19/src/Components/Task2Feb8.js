import { useState } from "react"

function Task2Feb8() {
    
    const [word, setWord] = useState('Foo')

    const applyChanges = () => {

        if (word === 'Foo') {
            setWord('Bar')

        } else if (word === 'Bar') {
            setWord('Bazz')

        } else {
            setWord('Foo')
        }

        // setWord(word == 'Foo' ? 'Bar' : 'Foo');
    }     
    
    return (
        <div className="m-5">
            <h1>Task 2 February 8</h1>
            <button onClick={applyChanges}>{word}</button>
        </div>
    )
}

export default Task2Feb8;