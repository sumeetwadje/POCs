import React, { useState } from 'react'
import MoneyContext from './MoneyContext'

const MoneyState = (props) => {
    const money = 1000;
    const [counter, setCounter] = useState(10)
    const person = { name: "ram", age: 40 }
    return (
        <MoneyContext.Provider value={{ money, counter, setCounter, person }}>{props.children}</MoneyContext.Provider>
    )
}

export default MoneyState