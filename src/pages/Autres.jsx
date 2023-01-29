import React from 'react'
import AutresExperiences from '../components/AutresExperiences'
import BanniereExperiences from '../components/BanniereExperiences'
import Header from '../components/Header'
import MenuDeGauche from '../components/MenuDeGauche'
import Nav from '../components/Nav'

const Autres = () => {
  return (
    <div className="global">
      <Header />
      <main>
        <Nav />
        <BanniereExperiences />
        <AutresExperiences />
      </main>
      <MenuDeGauche />
    </div>
  )
}

export default Autres
