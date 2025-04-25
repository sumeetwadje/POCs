import React, { useRef } from 'react'

const Ref = () => {

    const imageRef = useRef(null);

    const handleImageChange = () => {
        imageRef.current.src = "https://cdn.pixabay.com/photo/2023/01/30/11/38/cat-7755458_1280.jpg"
    }

    return (
        <div>
            <h1>Change Image on cutton Click</h1>
            <img ref={imageRef} src="https://cdn.pixabay.com/photo/2024/12/31/23/46/bridge-9302956_1280.jpg" alt="" />
            <button onClick={handleImageChange}>Click To Change</button>
        </div>
    )
}

export default Ref