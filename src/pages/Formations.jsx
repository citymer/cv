import React from 'react'
import BanniereFormation from '../components/BanniereFormation'
import FormationsComponents from '../components/FormationsComponents'
import Header from '../components/Header'
import MenuDeGauche from '../components/MenuDeGauche'
import Nav from '../components/Nav'

const Formations = () => {
  return (
    <div className="global">
      <Header />
      <main>
        <Nav />
        <BanniereFormation />
        <FormationsComponents />
      </main>
      <MenuDeGauche />
    </div>
  )
}

export default Formations
