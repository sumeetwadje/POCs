import React, { useState } from 'react'

const Counter = () => {
    let [counter, setCounter] = useState(0);
    const increaseCounter = () => {
        setCounter(counter + 1)
    }
    const decreaseCounter = () => {
        console.log("clicked")
        setCounter(counter - 1)
    }
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increaseCounter}>Increase by 1</button>
            <button onClick={decreaseCounter}>Decrease by 1</button>
        </div>

    )
}

export default Counter
