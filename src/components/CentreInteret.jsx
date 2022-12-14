import React from 'react'
import bricolage from '../assets/bricolage.png'
import jardinage from '../assets/jardinage.png'
import Carrousel from './Carrousel'

const CentreInteret = () => {
  return (
    <div className="contentText">
      <h3>Centre d'intérêt</h3>
      <ul>
        <li className="li">
          Passionné par le deux roues vélo/vtt en club depuis toujours
        </li>
        <div>
          <Carrousel />
        </div>
        <li className="li">Amateur de bricolage et de jardinage</li>
        <div className="alignLogo">
          <div className="contentlogo ">
            <img src={bricolage} alt="logo deejay" className="withlogo" />
          </div>
          <div className="contentlogo ">
            <img src={jardinage} alt="logo deejay" className="withlogo" />
          </div>
        </div>
      </ul>
    </div>
  )
}

export default CentreInteret
