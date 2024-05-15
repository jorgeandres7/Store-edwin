import React from 'react'

export const Main = ({children}) => {
  return (
    <>
   <main className='bg-gradient-to-bl from-red-800 via-blue-400 to-black  flex justify-between'>{children}</main>
    </>
  )
}
