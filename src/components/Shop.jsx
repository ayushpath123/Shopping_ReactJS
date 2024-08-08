import React from 'react'
import list from '../list'
import Card from './Card';
function Shop({handleclick}) {
  return (
   <section className='flex flex-row items-center justify-between flex-wrap m-10'>
    {list.map(item=>(
      <Card items={item} key={item.id} handleclick={handleclick}/>
    ))}
   </section>
  )
}

export default Shop