import React from 'react'
import District from './District'

const State = ({ money }) => {
    return (
        <div>
            <h1>This is State Component</h1>
            <District money={money}></District>
        </div>

    )
}

export default State