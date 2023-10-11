import React from 'react'
import wine from '../assets/wine.png'
import deejay from '../assets/deejay.png'
import preparateur from '../assets/preparateur.png'
import rayons from '../assets/rayons.png'
import livreurs from '../assets/livreurs.png'
import responsable from '../assets/responsable.png'
import chefdeligne from '../assets/chefdeligne.png'

const AutresExperiences = () => {
  return (
    <div className="contentText">
      <h3>Autres expériences proféssionnelles</h3>
      <ul>
        <li className="li">
          04/2023 - 09/2023 - Sodial - Orange -{' '}
          <strong>Préparateur de commande</strong>
        </li>
        <div className="contentlogo ">
          <img src={preparateur} alt="logo developpeur" className="logo" />
        </div>
        <li className="li">
          03/2017 - 04/2021 - Brotte SA - Chateauneuf du pape -{' '}
          <strong>Caviste</strong>
        </li>
        <div className="contentlogo ">
          <img src={wine} alt="logo developpeur" className="logo" />
        </div>
        <li className="li">
          12/2013 - 02/2017 - JPM Events - Jonquières - <strong>Dee Jay</strong>
        </li>
        <div className="contentlogo ">
          <img src={deejay} alt="logo deejay" className="logo" />
        </div>
        <li className="li">
          01/2012 - 12/2013 - Adecco - Orange -{' '}
          <strong>
            Préparateur de commandes, mise en rayon libre-service, livreur
          </strong>
        </li>
        <div className="alignLogo">
          <div className="contentlogo ">
            <img src={preparateur} alt="logo deejay" className="withlogo" />
          </div>
          <div className="contentlogo ">
            <img src={rayons} alt="logo deejay" className="withlogo" />
          </div>
          <div className="contentlogo ">
            <img src={livreurs} alt="logo deejay" className="withlogo" />
          </div>
        </div>
        <li className="li">
          01/2009 - 01/2012 - Prestige et Tradition - Chateauneuf du pape -{' '}
          <strong>Responsable des commandes</strong>
        </li>
        <div className="contentlogo ">
          <img src={responsable} alt="logo developpeur" className="logo" />
        </div>
        <li className="li">
          02/2006 - 10/2009 - SARL RAM'S - La Baume de transit -{' '}
          <strong>Dee Jay</strong>
        </li>
        <div className="contentlogo ">
          <img src={deejay} alt="logo deejay" className="logo" />
        </div>

        <li className="li">
          01/1995 - 01/2008 - SAS Conserves de provence -{' '}
          <strong>Chef de ligne</strong>{' '}
        </li>

        <div className="contentlogo ">
          <img src={chefdeligne} alt="logo deejay" className="logo maxwith" />
        </div>
      </ul>
    </div>
  )
}

export default AutresExperiences
