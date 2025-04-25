import React, { useMemo, useState } from 'react'

function Cart() {
    const [cart, setCart] = useState([
        { id: 1, name: "laptop", price: 50000 },
        { id: 2, name: "mobile", price: 25000 },
        { id: 3, name: "headphones", price: 10000 },
    ])
    const [discount, setDiscount] = useState(0);
    const totalPrice = useMemo(() => {
        console.log("momo")
        return cart.reduce((total, item) =>
            total + item.price
            , 0)
    }, [cart])
    // const totalPrice = cart.reduce((total, item) => {
    //     return total + item.price
    // }, 0)
    return (
        <div>
            <h1>welcome to shopping cart</h1>
            {cart.map(item => <p key={item.id}>{item.name}: {item.price}</p>)}
            <h1>TotalPrice : {totalPrice}</h1>
            <button onClick={() => { setDiscount(discount + 10) }}>Increase Discount</button>
        </div>
    )
}

export default Cart