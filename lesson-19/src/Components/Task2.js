
function Task2() {
    const fizzBazzList = [];

    for (let i = 1; i < 50; i++) {

        let text = ''
        let color = ''

        if (i % 2 === 0) {
            text = 'Fizz';
            color = 'green'

        } else if (i % 3 === 0) {
            text = 'Bazz';
            color = 'blue'

        } else if (i % 2 === 0 && i % 3 === 0) {
            text = 'FizzBazz';
            color = 'red'

        } else {
            text = i;
            color = 'pink'
        }

        fizzBazzList.push(
            <li style={{color: color}}>
                {text}
            </li>   
        )
    }

    return (
        <div className="mx-5">
            <h1 className="mt-5">Task 2</h1>
            <ul>
                {fizzBazzList}
            </ul>
        </div>
    )
}

export default Task2;