import React from 'react'
import Block from './Block'

const District = ({ money }) => {
    return (
        <div>
            <h1>this is District Component</h1>
            <Block money={money}></Block>
        </div>
    )
}

export default District