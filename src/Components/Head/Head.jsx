import React from 'react'
import foto from '../../assets/Images/Uno.png'
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import {faUser,faCartPlus} from '@fortawesome/free-solid-svg-icons'


export const Head = () => {
  return (
    <>
     <div className='flex justify-end text-4xl items-center  '>
   
   <button className=''><FontAwesomeIcon icon={faCartPlus}/></button>
   
   </div>
<div className='flex items-center justify-around'>
    <img src={foto} alt="" className='border-double border-8 border-black'  />
    <h1 className='text-xl text-white border-2 border-black rounded-full font-extralight'>¡¡¡Bienenidos a Online Shop!!!</h1>
    <button></button>
    </div>
    
   
   
    
    </>
  )
}
