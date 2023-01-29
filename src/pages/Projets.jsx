import React from 'react'
import Header from '../components/Header'
import MenuDeGauche from '../components/MenuDeGauche'
import Nav from '../components/Nav'
import ProjetsRealises from '../components/ProjetsRealises'

const Projets = () => {
  return (
    <div className="global">
      <Header />
      <main>
        <Nav />
        <ProjetsRealises />
      </main>
      <MenuDeGauche />
    </div>
  )
}

export default Projets
