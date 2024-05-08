import React from 'react'
import { Header } from '../Header/Header'
import { Infor } from '../Infor/Infor'
import { Head } from '../Head/Head'
import { Main } from '../Main/Main'


export const Home = () => {
  return (
    <>
   
    <Header>
<Head></Head>
  </Header>
<Main>
    <Infor></Infor>
    </Main>
   
    </>
  )
}
