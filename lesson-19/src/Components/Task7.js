import { useState } from "react"
import isAnagram from "../Helpers/isAnagram"

function Task7() {
    const [word1, setWord1] = useState('')
    const [word2, setWord2] = useState('')

    let message = <h5 style={{ color: 'red' }}>Words are not anagrams</h5>

    if (isAnagram(word1, word2)) {
        message = <h5 style={{ color: 'green' }}>Words are anagrams</h5>
    }

    if (!word1 && !word2) {
        message = <h5 style={{ color: 'orange' }}>Please enter both words</h5>
    }

    return (
        <div className="row m-5">
            <div className="">
                <h1>Task 7 February 15</h1>
            </div>
            <div className="">
                <h6>{message}</h6>
            </div>
            <div className="row">
                <div className="col-2">
                    <input type='text' value={word1} onChange={(event) => setWord1(event.target.value)}></input>
                </div>
                <div className="col-2">
                    <input type='text' value={word2} onChange={(event) => setWord2(event.target.value)}></input>
                </div>
            </div>
        </div>
    )
}

export default Task7;