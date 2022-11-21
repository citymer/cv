import React from 'react'
import visage from '../assets/visage.jpg'

const MenuDeGauche = () => {
  return (
    <footer className="menuGauche">
      <img className="portrait" src={visage} alt="portrait" />

      <article className="left">
        <h3 className="coordonnees">CONTACT</h3>

        <div className="flex">
          <div className="iconPosition">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z" />
            </svg>
            <p className="textAdress">cityhunter8484@gmail.com</p>
          </div>
        </div>
        <div className="flex">
          <div className="iconPosition">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M284.6 181.9c-10.28-8.344-25.41-6.875-33.75 3.406C242.4 195.6 243.9 210.7 254.2 219.1c11.31 9.25 17.81 22.69 17.81 36.87c0 14.19-6.5 27.62-17.81 36.87c-10.28 8.406-11.78 23.53-3.375 33.78c4.719 5.812 11.62 8.812 18.56 8.812c5.344 0 10.75-1.781 15.19-5.406c22.53-18.44 35.44-45.4 35.44-74.05S307.1 200.4 284.6 181.9zM345.1 107.1c-10.22-8.344-25.34-6.907-33.78 3.343c-8.406 10.25-6.906 25.37 3.344 33.78c33.88 27.78 53.31 68.18 53.31 110.9s-19.44 83.09-53.31 110.9c-10.25 8.406-11.75 23.53-3.344 33.78c4.75 5.781 11.62 8.781 18.56 8.781c5.375 0 10.75-1.781 15.22-5.438C390.2 367.1 416 313.1 416 255.1S390.2 144.9 345.1 107.1zM406.4 33.15c-10.22-8.344-25.34-6.875-33.78 3.344c-8.406 10.25-6.906 25.37 3.344 33.78C431.9 116.1 464 183.8 464 255.1s-32.09 139.9-88.06 185.7c-10.25 8.406-11.75 23.53-3.344 33.78c4.75 5.781 11.62 8.781 18.56 8.781c5.375 0 10.75-1.781 15.22-5.438C473.5 423.8 512 342.6 512 255.1S473.5 88.15 406.4 33.15zM151.3 174.6C161.1 175.6 172.1 169.5 176 159.6l33.75-84.38C214 64.35 209.1 51.1 200.2 45.86l-67.47-42.17C123.2-2.289 110.9-.8945 102.9 7.08C-34.32 144.3-34.31 367.7 102.9 504.9c7.982 7.984 20.22 9.379 29.75 3.402l67.48-42.19c9.775-6.104 13.9-18.47 9.598-29.3L176 352.5c-3.945-9.963-14.14-16.11-24.73-14.97l-53.24 5.314C78.89 286.7 78.89 225.4 98.06 169.3L151.3 174.6z" />
            </svg>
          </div>
          <p className="textAdress marginUp">06 95 16 11 91</p>
        </div>
        <p>
          <strong> Mobilité sur le Vaucluse sur site et/ou hybride</strong>
        </p>
      </article>
    </footer>
  )
}

export default MenuDeGauche
