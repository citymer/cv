import React from 'react'
import CompetencesTechniques from '../components/CompetencesTechniques'
import Header from '../components/Header'
import MenuDeGauche from '../components/MenuDeGauche'
import Nav from '../components/Nav'

const Competences = () => {
  return (
    <div className="global">
      <Header />
      <main>
        <Nav />
        <CompetencesTechniques />
      </main>
      <MenuDeGauche />
    </div>
  )
}

export default Competences
