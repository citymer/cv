import React from 'react'
import CompetencesTechniques from '../components/CompetencesTechniques'
import Header from '../components/Header'
import MenuDeGauche from '../components/MenuDeGauche'
import Nav from '../components/Nav'

const Competences = () => {
  return (
    <div className="global">
      <MenuDeGauche />
      <div className="menudroit">
        <Header />
        <main>
          <Nav />
          <CompetencesTechniques />
        </main>
      </div>
    </div>
  )
}

export default Competences
