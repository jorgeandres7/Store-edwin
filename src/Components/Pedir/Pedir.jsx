import React from 'react'

export const Pedir = ({idNews , img,precio,descripcion}) => {
  return (
    <div>
        <div className='' id={idNews}>
            <img src={img} alt="" />
            <h1 className='text-black'>{precio}</h1>
            <p>{descripcion}</p>

        </div>


    </div>
  )
}
