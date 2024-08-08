import React, { useEffect, useMemo, useState } from 'react'

function Cart({ cart, setCart }) {
    const handle = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
    };
   const [price,setPrice]=useState(0)
   useEffect(() => {
    let totalprice = 0;
    cart.forEach(item => {
        totalprice += item.price;
    });
    setPrice(totalprice);
}, [cart]); 
  
    return (
        <div>
            <div>
            {cart.map(item => (
                <div className="flex flex-row  items-center justify-around m-8" key={item.id}>
                    
                    <img src={item.img} alt={`Item with ID ${item.id}`} />
                    <div>
                        <button onClick={() => handle(item.id)} className='bg-gray-600 rounded text-white'>Remove</button>
                    </div>
                    <p className='font-black text-xl'>Price: ${item.price}</p>
                </div>
            ))}
            </div>
            <div className='flex flex-row gap-4  items-center justify-center m-20 font-serif'>
                <p className='text-2xl'>Total Price is </p>
                <h1 className='text-3xl font-black'>{price}</h1>
            </div>
        </div>
    );
}


export default Cart