import React from 'react'
import MenuDeGauche from '../components/MenuDeGauche'
import Header from '../components/Header'
import Nav from '../components/Nav'
import CentreInteret from '../components/CentreInteret'

const Centres = () => {
  return (
    <div className="global">
      <MenuDeGauche />
      <div className="menudroit">
        <Header />
        <main>
          <Nav />
          <CentreInteret />
        </main>
      </div>
    </div>
  )
}

export default Centres
