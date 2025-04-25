import React, { useState } from 'react'
import State from './State'

const Goverment = () => {
    const [peopleMoney, setpeopleMoney] = useState(500)
    return (
        <div>
            <h1>This is Gov component</h1>
            <State money={peopleMoney}></State>
        </div>

    )
}

export default Goverment