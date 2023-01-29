import React, { Fragment } from 'react'
import reservia from '../assets/reservia.PNG'
import github from '../assets/GitHub-LogoPNG1.png'
import website from '../assets/logo-websites-31315.png'
import ohmyfood from '../assets/ohmyfood.PNG'
import fisheyes from '../assets/fisheyes.PNG'
import petitsplats from '../assets/les petits plats.PNG'
import maquette from '../assets/maquetteFigma.PNG'
import kasa from '../assets/kasa.PNG'
import sporsee from '../assets/sporsee.PNG'
import argentbank from '../assets/argentbank.PNG'
import Banniere from '../components/Banniere'
import hrnet from '../assets/hrnet.PNG'
import gameon from '../assets/gameOn.PNG'
import billed from '../assets/billed.PNG'

const ProjetsRealises = () => {
  return (
    <Fragment>
      <Banniere />
      <div className="contentText">
        <h3>PROJETS RÉALISÉS</h3>
        <ul className="projet">
          <li className="li">
            Transformer une maquette en site web avec HTML & CSS
          </li>
          <div className="contentImg">
            <img src={reservia} alt="projet 2" className="projetImg" />
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
                <img src={website} alt="lien site" className="website" />
              </a>
            </div>
          </div>

          <li className="li">Dynamiser une page web avec des animations CSS</li>
          <div className="contentImg">
            <img src={ohmyfood} alt="projet 2" className="projetImg" />
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
                <img src={website} alt="lien site" className="website" />
              </a>
            </div>
          </div>

          <li className="li">Créer une landing page Javascript</li>
          <div className="contentImg">
            <img src={gameon} alt="projet 2" className="projetImg" />
            <div className="contentLogo">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/citymer/JeromeMercier_4_07102021"
                className="link"
              >
                <img src={github} alt="lien github" className="github" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://citymer.github.io/JeromeMercier_4_07102021/"
                className="link"
              >
                <img src={website} alt="lien site" className="website" />
              </a>
            </div>
          </div>
          <li className="li">
            Créer un site accessible pour une plateforme de photographes
          </li>
          <div className="contentImg">
            <img src={fisheyes} alt="projet 2" className="projetImg" />
            <div className="contentLogo">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/citymer/JeromeMercier_6_10112021"
                className="link"
              >
                <img src={github} alt="lien github" className="github" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://citymer.github.io/JeromeMercier_6_10112021/"
                className="link"
              >
                <img src={website} alt="lien site" className="website" />
              </a>
            </div>
          </div>

          <li className="li">
            Développer un algorithme de recherche en Javascript
          </li>
          <div className="contentImg">
            <img src={petitsplats} alt="projet 2" className="projetImg" />
            <div className="contentLogo">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/citymer/JeromeMercier_7_02032022"
                className="link"
              >
                <img src={github} alt="lien github" className="github" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://citymer.github.io/JeromeMercier_7_02032022/"
                className="link"
              >
                <img src={website} alt="lien site" className="website" />
              </a>
            </div>
          </div>
          <li className="li">Débugger et testez un SaaS RH</li>
          <div className="contentImg">
            <img src={billed} alt="projet 11" className="projetImg" />
            <div className="contentLogo">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/citymer/billed"
                className="link"
              >
                <img src={github} alt="lien github" className="github" />
              </a>
            </div>
          </div>
          <li className="li">
            Définisser les besoins pour une app de soutien scolaire
          </li>
          <div className="contentImg">
            <img src={maquette} alt="projet 2" className="projetImg" />
            <div className="contentLogo">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.figma.com/file/dN1UCf3B4ZMNoPybYw6nmM/Maquette-Learn%40Home?node-id=0%3A1&t=DQMkCjf2ErpOIPQF-0"
                className="link"
              >
                <img src={website} alt="lien site" className="website" />
              </a>
            </div>
          </div>
          <li className="li">
            Développer une application Web avec React et React Router
          </li>
          <div className="contentImg">
            <img src={kasa} alt="projet 11" />
            <div className="contentLogo">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/citymer/JeromeMercier_11_28072022"
                className="link"
              >
                <img src={github} alt="lien github" className="github" />
              </a>
              <a target="_blank" rel="noreferrer" href="d" className="link">
                <img src={website} alt="lien site" className="website" />
              </a>
            </div>
          </div>
          <li className="li">
            Développer un tableau de bord d'analytics avec React
          </li>
          <div className="contentImg">
            <img src={sporsee} alt="projet 11" className="projetImg" />
            <div className="contentLogo">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/citymer/JeromeMercier_12_19082022"
                className="link"
              >
                <img src={github} alt="lien github" className="github" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://citymer.github.io/JeromeMercier_12_19082022/#/home/12"
                className="link"
              >
                <img src={website} alt="lien site" className="website" />
              </a>
            </div>
          </div>
          <li className="li">
            Utiliser une API pour un compte utilisateur bancaire avec React
          </li>
          <div className="contentImg">
            <img src={argentbank} alt="projet 11" className="projetImg" />
            <div className="contentLogo">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/citymer/JeromeMercier_13_21092022"
                className="link"
              >
                <img src={github} alt="lien github" className="github" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://citymer.github.io/JeromeMercier_13_21092022/"
                className="link"
              >
                <img src={website} alt="lien site" className="website" />
              </a>
            </div>
          </div>
          <li className="li">Faire passer une librairie jQuery vers React</li>
          <div className="contentImg">
            <img src={hrnet} alt="projet 11" className="projetImg" />
            <div className="contentLogo">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/citymer/JeromeMercier_14_11102022"
                className="link"
              >
                <img src={github} alt="lien github" className="github" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://citymer.github.io/JeromeMercier_14_11102022/#/"
                className="link"
              >
                <img src={website} alt="lien site" className="website" />
              </a>
            </div>
          </div>
        </ul>
      </div>
    </Fragment>
  )
}

export default ProjetsRealises
