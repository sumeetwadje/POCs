import React, { useId } from 'react'

const UseId = () => {
    const id = useId();
    const id2 = useId();
    return (
        <div>
            <label htmlFor={id}>
                Name: <input type="text" id={id} />
            </label>
            <label htmlFor={id2}>
                Name: <input type="text" id={id2} />
            </label>
        </div>
    )
}

export default UseId