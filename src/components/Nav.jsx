import React from 'react'

import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <li>
            <button>Acceuil</button>
          </li>
        </NavLink>
        <NavLink
          to="/competences-techniques"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <li>
            <button>Compétences Techniques</button>
          </li>
        </NavLink>
        <NavLink
          to="/projets-realises"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <li>
            <button>Projets Réalisés</button>
          </li>
        </NavLink>
        <NavLink
          to="/formations"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <li>
            <button>Formations</button>
          </li>
        </NavLink>
        <NavLink
          to="/autres"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <li>
            <button>Autres Éxpériences Proféssionnelles</button>
          </li>
        </NavLink>
        <NavLink
          to="/centre-interet"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <li>
            <button>Centre d'intérêt</button>
          </li>
        </NavLink>
      </ul>
    </nav>
  )
}

export default Nav
