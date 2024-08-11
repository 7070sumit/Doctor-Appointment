import React, { useState } from 'react'

function CartForBuyMedicine() {

    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Medicine A', price: 10, quantity: 1 },
        { id: 2, name: 'Medicine B', price: 15, quantity: 1 },
        { id: 3, name: 'Medicine C', price: 20, quantity: 1 },
    ]);

    const increaseQuantity = (id) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const decreaseQuantity = (id) => {
        setCartItems(cartItems.map(item =>
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ));
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };



    return (
        <div className="absolute top-16 right-[-1px] border bg-gray-100 lg:w-[600%] max-h-max mt-2 rounded-b-lg rounded-tl-lg shadow-lg text-[#BD1E51]">
            {/* connecting div */}
            <div className='w-[34px] h-[41px] absolute right-[-1px] top-[-41px] px-8 border-x bg-gray-100'></div>



            <div className="p-4">
                <h2 className=" text-center text-xl font-semibold mb-4">Your Cart</h2>

                <ul>
                    {cartItems.map(item => (
                        <li key={item.id} className="flex justify-between items-center mb-4 ">
                            <span>{item.name}</span>
                            <div className="flex items-center">
                                <button
                                    className="px-2 py-1 bg-[#dd225d] rounded-l hover:bg-[#BD1E51]  text-white font-medium"
                                    onClick={() => decreaseQuantity(item.id)}
                                >
                                    -
                                </button>
                                <span className="px-4">{item.quantity}</span>
                                <button
                                    className="px-2 py-1 bg-[#dd225d] rounded-r hover:bg-[#BD1E51]  text-white font-medium"
                                    onClick={() => increaseQuantity(item.id)}
                                >
                                    +
                                </button>
                            </div>
                            <span className='text-lg font-medium'>${item.price * item.quantity}</span>
                            <button
                                className=""
                                onClick={() => removeItem(item.id)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#BD1E51"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="mt-8 ">
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-semibold">Total:</span>
                        <span className="text-xl font-semibold">
                            ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
                        </span>
                    </div>
                    <button className="w-full bg-[#dd225d] text-white py-2 rounded-lg hover:bg-[#BD1E51] transition">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartForBuyMedicine


