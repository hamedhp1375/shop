import React, { useState } from 'react'
import { womanProducts } from '../../../data/Data'
import Li_custom from '../../../component/Li-custom/Li_custom'
import { Prev } from 'react-bootstrap/esm/PageItem'

function Mega_menu() {
 const [show_menu , setShowMenu ]=useState(false)
 const toggleMenu=()=>{
  setShowMenu(PrevShowMenu =>!PrevShowMenu)
 }
 let Menu
   if (show_menu===true){
    Menu=(
      <>
      <ul className='list-group'>
      {womanProducts.map(item=>{
        return(
       <Li_custom addres="#" name={item.name} classname='list-group-item'
        classLink='text-decoration-none text text-dark' />
      )
      })}
      </ul>
      </>
    )
  }
  return (
    <div>
      <h3 onClick={toggleMenu}>show menu</h3>
      {Menu}
    </div>
  )
}

export default Mega_menu