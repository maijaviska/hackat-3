import { useState } from "react"

function Task4Feb8() {

    const [currentBlock, setCurrentBlock] = useState(0)

    const bg1 = currentBlock === 0 ? 'red' : 'blue' 
    const bg2 = currentBlock === 1 ? 'red' : 'blue' 
    const bg3 = currentBlock === 2 ? 'red' : 'blue' 
    const bg4 = currentBlock === 3 ? 'red' : 'blue' 
    const bg5 = currentBlock === 4 ? 'red' : 'blue' 

    const updateValueLeft = () => {
        let nextselected = currentBlock - 1
        if (nextselected < 0) {
            nextselected = 0
        }
        setCurrentBlock(nextselected)
    }
    const updateValueRight = () => {
        let nextselected = currentBlock + 1
        if (nextselected > 4) {
            nextselected = 4
        }
        setCurrentBlock(nextselected)
    }

    return (
        <div>
            <div className="mx-5">
                <h1>Task 4 February 8</h1>
            </div>
            <div className="row d-flex mx-5">
                <div className="col-2 m-2" style={{width:100, height:100, background: bg1}}>
                </div>
                <div className="col-2 m-2" style={{width:100, height:100, background: bg2}}>
                </div> 
                <div className="col-2 m-2" style={{width:100, height:100, background: bg3}}>
                </div> 
                <div className="col-2 m-2" style={{width:100, height:100, background: bg4}}>
                </div> 
                <div className="col-2 m-2" style={{width:100, height:100, background: bg5}}>
                </div>             
            </div>
            <div className="mx-5 mb-3">
                <button onClick={updateValueLeft}>Left</button>
                <button onClick={updateValueRight}>Right</button>
            </div>
        </div>
    )
}

export default Task4Feb8;