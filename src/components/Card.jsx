import React from 'react';

const Card = ({ items, key,handleclick}) => {
    return (
        <div key={key} className='m-12 p-10  hover:bg-gray-100'>
           <img src={items.img}></img>
           <p className='font-black text-red-300'>{items.title}</p>
           <h3 className='font-semibold text-black-300'>{items.author}</h3>
           <p className='font-bold text-gray-600'>Price-{items.price}</p>
           <button className='rounded-xl bg-gray-200' onClick={()=>handleclick(items)}>Add To Cart</button>
        </div>
    );
};

export default Card;
