import { useState } from "react"

function Buttons() {

    const [activeBtn, setActiveBtn] = useState(-1)

    const buttons = ['Btn1', 'Btn2', 'Btn3', 'Btn4', 'Btn5']

    const buttonsList = buttons.map((buttonName, index) => {
        let btnClasses = 'btn mx-1'

        if (activeBtn === index) {
            btnClasses += ' btn-danger'
        } else {
            btnClasses += ' btn-primary'
        }

        return (
            <button className="btn btn-primary mx-1" 
            key={index} 
            onClick={() => setActiveBtn(index)}
            >
                {buttonName}
            </button>
        )
    })

    return (
        <div className="m-5">
            {buttonsList}
            <h4>{activeBtn}</h4>
        </div>
    )
}

export default Buttons;