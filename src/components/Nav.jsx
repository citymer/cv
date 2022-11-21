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
          <li>Acceuil</li>
        </NavLink>
        <NavLink
          to="/competences-techniques"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <li>Compétences Techniques</li>
        </NavLink>
        <NavLink
          to="/projets-realises"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <li>Projets Réalisés</li>
        </NavLink>
        <NavLink
          to="/formations"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <li>Formations</li>
        </NavLink>
        <NavLink
          to="/autres"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <li>Autres Éxpériences Proféssionnelles</li>
        </NavLink>
      </ul>
    </nav>
  )
}

export default Nav
