import React from 'react'
import FormationsComponents from '../components/FormationsComponents'
import Header from '../components/Header'
import MenuDeGauche from '../components/MenuDeGauche'
import Nav from '../components/Nav'

const Formations = () => {
  return (
    <div className="global">
      <MenuDeGauche />
      <div className="menudroit">
        <Header />
        <main>
          <Nav />
          <FormationsComponents />
        </main>
      </div>
    </div>
  )
}

export default Formations
