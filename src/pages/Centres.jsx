import React from 'react'
import MenuDeGauche from '../components/MenuDeGauche'
import Header from '../components/Header'
import Nav from '../components/Nav'
import CentreInteret from '../components/CentreInteret'

const Centres = () => {
  return (
    <div className="global">
      <Header />
      <main>
        <Nav />
        <CentreInteret />
      </main>
      <MenuDeGauche />
    </div>
  )
}

export default Centres
