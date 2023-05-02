import React from 'react'
import Header from '../../components/client/Header'
import Footer from '../../components/client/Footer'
import { Outlet } from 'react-router-dom'

const ClientLayout = (onClickCart,onClickSignIn) => {
  return (
    <>
    <Header onClickSignIn={() => onClickSignIn} onClickCart={() => onClickCart}/>
    <main>
    <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default ClientLayout