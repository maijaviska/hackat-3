import { useState } from "react";
import isPalindrome from "../Helpers/isPalindrome";

function Task8() {

    const [inputWord, setInputWord] = useState('')

    let message = <h4 style={{ color: 'red' }}>Word is not a palindrome</h4>

    if (isPalindrome(inputWord)) {
        message = <h4 style={{ color: 'green' }}>Word is a palindrome</h4>
    }

    if (!inputWord) {
        message = <h4 style={{ color: 'orange' }}>Please enter a word</h4>
    }

    return (
        <div className="row m-5">
            <div className="col">
                <h1>Task 8 February 15</h1>
            </div>
            <div className="row">
                <div className="col-4">
                    {message}
                    <input type="text" value={inputWord} onChange={(event => setInputWord(event.target.value))}></input>
                </div>
            </div>
        </div>
    )
}

export default Task8;