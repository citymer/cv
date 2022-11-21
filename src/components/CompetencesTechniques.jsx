import React, { Fragment } from 'react'

const CompetencesTechniques = () => {
  return (
    <Fragment>
      <div className="contentText">
        <h3>COMPETENCES TECHNIQUES</h3>
      </div>
      <div className="front-autres">
        <div className="frontend">
          <h4>FRONT-END</h4>
          <ul>
            <li>Javascript</li>
            <li>HTML & CSS</li>
            <li>Sass</li>
            <li>Bootstrap</li>
            <li>React</li>
            <li>React Router</li>
          </ul>
        </div>
        <div className="autres">
          <h4>AUTRES TECHNOLOGIES</h4>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>Interaction avec une API</li>
            <li>Figma</li>
            <li>MongoDB</li>
            <li>NPM</li>
            <li>Node.js</li>
          </ul>
        </div>
      </div>
    </Fragment>
  )
}

export default CompetencesTechniques
