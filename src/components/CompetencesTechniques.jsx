import React, { Fragment } from 'react'
import Banniere from './Banniere'

const CompetencesTechniques = () => {
  return (
    <Fragment>
      <Banniere />
      <div className="front-autres">
        <div className="frontend">
          <h4>FRONT-END</h4>
          <ul>
            <li className="li">Javascript</li>
            <li className="li">HTML & CSS</li>
            <li className="li">Sass</li>
            <li className="li">Bootstrap</li>
            <li className="li">React</li>
            <li className="li">React Router</li>
          </ul>
        </div>
        <div className="autres">
          <h4>AUTRES TECHNOLOGIES</h4>
          <ul>
            <li className="li">Git</li>
            <li className="li">GitHub</li>
            <li className="li">Interaction avec une API</li>
            <li className="li">Figma</li>
            <li className="li">MongoDB</li>
            <li className="li">NPM</li>
            <li className="li">Node.js</li>
          </ul>
        </div>
      </div>
    </Fragment>
  )
}

export default CompetencesTechniques
