import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Shop from './components/Shop'
import Cart from './components/Cart'
function App() {
  const [cart,setCart]=useState([]);
  const [warn,setWarn]=useState(false);
  const [show,setShow]=useState(true)
  const handleclick = (item) => {
    const isPresent = cart.some(product => product.id === item.id);
  
    if (isPresent) {
      alert('Already present in the cart');
      setWarn(true);
    } else {
      setCart([...cart, item]);
      setWarn(false);
    }
  };
  
  return (
    <>
    <Navbar size={cart.length} setShow={setShow}></Navbar>
    {show? <Shop handleclick={handleclick}></Shop>:<Cart cart={cart} setCart={setCart}/>}
    </>
  )
}

export default App
