import React from 'react'
import Header from '../components/Header'
import MenuDeGauche from '../components/MenuDeGauche'
import Nav from '../components/Nav'
import QuiSuisJe from '../components/QuiSuisJe'
import Banniere from '../components/Banniere'

const Home = () => {
  return (
    <div className="global">
      <Header />
      <main>
        <Nav />
        <Banniere />
        <QuiSuisJe />
      </main>
      <MenuDeGauche />
    </div>
  )
}

export default Home
