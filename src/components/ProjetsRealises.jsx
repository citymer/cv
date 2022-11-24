import React from 'react'
import reservia from '../assets/reservia.PNG'
import github from '../assets/GitHub-LogoPNG1.png'
import website from '../assets/logo-websites-31315.png'
import ohmyfood from '../assets/ohmyfood.PNG'

const ProjetsRealises = () => {
  return (
    <div className="contentText">
      <h3>PROJETS RÉALISÉS</h3>
      <ul>
        <li className="li">
          Transformez une maquette en site web avec HTML & CSS
        </li>
        <div className="contentImg">
          <img src={reservia} alt="projet 2" />
          <div className="contentLogo">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/citymer/JeromeMercier_2_09082021"
              className="link"
            >
              <img src={github} alt="lien github" className="github" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://citymer.github.io/JeromeMercier_2_09082021/"
              className="link"
            >
              <img src={website} alt="lien github" className="website" />
            </a>
          </div>
        </div>
        <li className="li">Dynamisez une page web avec des animations CSS</li>
        <div className="contentImg">
          <img src={ohmyfood} alt="projet 2" />
          <div className="contentLogo">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/citymer/JeromeMercier_3_10092021"
              className="link"
            >
              <img src={github} alt="lien github" className="github" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://citymer.github.io/JeromeMercier_3_10092021/"
              className="link"
            >
              <img src={website} alt="lien github" className="website" />
            </a>
          </div>
        </div>
        <li className="li">Créez une landing page Javascript</li>
        <li className="li">
          Créez un site accessible pour une plateforme de photographes
        </li>
        <li className="li">
          Développez un algorithme de recherche en Javascript
        </li>
        <li className="li">Débuggez et testez un SaaS RH</li>
        <li className="li">
          Définissez les besoins pour une app de soutien scolaire
        </li>
        <li className="li">
          Développez une application Web avec React et React Router
        </li>
        <li className="li">
          Développez un tableau de bord d'analytics avec React
        </li>
        <li className="li">
          Utilisez une API pour un compte utilisateur bancaire avec React
        </li>
        <li className="li">Faite passer une librairie jQuery vers React</li>
      </ul>
    </div>
  )
}

export default ProjetsRealises
