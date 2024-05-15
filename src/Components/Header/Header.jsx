import React from 'react'

export const Header = ({children}) => {
  return (
<>
<header className='w-full bg-gradient-to-bl from-blue-800 via-blue-400 to-blue-100 bg-image h-80 border-8 border-white'>{children}</header>
</>

  )
}
