import React from 'react'
import foto from '../../assets/Images/Uno.png'
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import {faUser,faCartPlus} from '@fortawesome/free-solid-svg-icons'


export const Head = () => {
  return (
    <>
     <div className='flex justify-end text-4xl items-start  '>
   
   <button className='flex items-center'><FontAwesomeIcon icon={faCartPlus}/></button>
   <button><FontAwesomeIcon icon={faUser}/></button>
   </div>
<div className='flex flex-col items-center'>
    <img src={foto} alt="" />
    <h1 className='text-xl text-white'>¡¡¡Bienenidos</h1>
    <h2 className=' text-white text-xl'>a</h2>
    <h3 className=' text-white text-xl'>Online Shop!!!</h3></div>
    
   
   
    
    </>
  )
}
