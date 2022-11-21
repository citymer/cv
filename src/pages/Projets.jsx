import React from 'react'
import Header from '../components/Header'
import MenuDeGauche from '../components/MenuDeGauche'
import Nav from '../components/Nav'
import ProjetsRealises from '../components/ProjetsRealises'

const Projets = () => {
  return (
    <div className="global">
      <MenuDeGauche />
      <div className="menudroit">
        <Header />
        <main>
          <Nav />
          <ProjetsRealises />
        </main>
      </div>
    </div>
  )
}

export default Projets
