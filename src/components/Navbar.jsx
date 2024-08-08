import React, { useState } from "react";

function Navbar({size,setShow}) {
  return (
    <nav className="bg-gray-600">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row gap-4 m-2 p-2">
        <span className="font-serif font-bold gr">EShop</span>
        <div onClick={()=>{setShow(true)}}>
          <span>
            <img
              src="/src/assets/react.svg"
              alt=""
            />
          </span>
        </div>
        </div>
       
        <div className="flex flex-row gap-4 m-2 p-2 items-center justify-center">
            <button className="rounded-full overflow-hidden" onClick={()=>setShow(false)}>
             <img className="h-12 w-12" src="https://www.shutterstock.com/image-vector/shopping-cart-icon-flat-design-600nw-570153007.jpg" alt="" />
            </button>
            <div>
            <h3 className="text-white">{size}</h3>
            </div>
        </div>
       
      </div>
    </nav>
  );
}

export default Navbar;
