import React, { Fragment } from 'react'
import bricolage from '../assets/bricolage.png'
import jardinage from '../assets/jardinage.png'
import BanniereLoisirs from './BanniereLoisirs'
//import Carrousel from './Carrousel'
import vtt from '../assets/vtt.png'
import ordi from '../assets/ordinateur.png'
import photoshop from '../assets/photoshop.png'
import office from '../assets/office.png'

const CentreInteret = () => {
  return (
    <Fragment>
      <BanniereLoisirs />
      <div className="contentText">
        <h3>Centre d'intérêt</h3>
        <ul className="projet">
          <li className="li">Passionné d'informatique</li>
          <div className="alignLogo">
            <div>
              <img src={ordi} alt="ordinateur" className="withlogo" />
            </div>
            <div>
              <img src={photoshop} alt="photoshop" className="withlogo" />
            </div>
            <div>
              <img src={office} alt="office" className="withlogo" />
            </div>
          </div>
          <li className="li">
            Passionné par le deux roues vélo/vtt en club depuis toujours
          </li>
          <div>
            <img src={vtt} alt="h" className="imgSlide" />
          </div>
          <li className="li">Amateur de bricolage et de jardinage</li>
          <div className="alignLogo">
            <div className="contentlogo ">
              <img src={bricolage} alt="logo deejay" className="withlogo" />
            </div>
            <div className="contentlogo">
              <img src={jardinage} alt="logo deejay" className="withlogo" />
            </div>
          </div>
        </ul>
      </div>
    </Fragment>
  )
}

export default CentreInteret
