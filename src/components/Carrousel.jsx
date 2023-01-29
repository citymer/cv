import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import vtt from '../assets/vtt.png'
import gameon from '../assets/gameOn.PNG'
import billed from '../assets/billed.PNG'

const Carrousel = () => {
  return (
    <div className="cards">
      <Splide
        options={{
          perPage: 1,
          autoplay: 'true',
          type: 'loop',
          isNavigation: 'true',
        }}
      >
        <SplideSlide>
          <div className="card">
            <img src={vtt} alt="h" className="imgSlide" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="card">
            <img src={gameon} alt="h" className="imgSlide" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="card">
            <img src={billed} alt="h" className="imgSlide" />
          </div>
        </SplideSlide>
      </Splide>
    </div>
  )
}

export default Carrousel
