import React, { useLayoutEffect, useState } from 'react'

const ChangeBg = () => {

    const [bgColor, setbgColor] = useState('lightblue')

    useLayoutEffect(() => {
        document.body.style.backgroundColor = bgColor
    }, [bgColor])//dependancy array

    return (
        <>
            <div>Current backgroundColor : {bgColor}</div>
            <button onClick={() => setbgColor("green")}>Green</button>
        </>
    )
}

export default ChangeBg