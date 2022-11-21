import React from 'react'
import Header from '../components/Header'
import MenuDeGauche from '../components/MenuDeGauche'
import Nav from '../components/Nav'
import QuiSuisJe from '../components/QuiSuisJe'

const Home = () => {
  return (
    <div className="global">
      <MenuDeGauche />
      <div className="menudroit">
        <Header />
        <main>
          <Nav />
          <QuiSuisJe />
        </main>
      </div>
    </div>
  )
}

export default Home
