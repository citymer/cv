import React from 'react'
import devlogo from '../assets/devlogo.png'
import habilitation from '../assets/habilitation.png'

const FormationsComponents = () => {
  return (
    <div className="contentText">
      <h3>Formations</h3>
      <ul>
        <li className="li">
          2022 - OpenClassrooms - Développeur d'application {''}
          <strong>Javascript React</strong>
        </li>
        <div className="contentlogo">
          <img src={devlogo} alt="logo developpeur" />
        </div>
        <li className="li">
          2019 - CFM - Habilitation électrique <strong>bo-ho-hov</strong>
        </li>
        <div className="contentlogo">
          <img src={habilitation} alt="logo developpeur" />
        </div>
      </ul>
    </div>
  )
}

export default FormationsComponents
