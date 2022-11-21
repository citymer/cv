import React from 'react'
import AutresExperiences from '../components/AutresExperiences'
import Header from '../components/Header'
import MenuDeGauche from '../components/MenuDeGauche'
import Nav from '../components/Nav'

const Autres = () => {
  return (
    <div className="global">
      <MenuDeGauche />
      <div className="menudroit">
        <Header />
        <main>
          <Nav />
          <AutresExperiences />
        </main>
      </div>
    </div>
  )
}

export default Autres
