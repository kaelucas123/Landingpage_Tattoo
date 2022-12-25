import React from 'react'
import '../Galeria/Galeria.css'
import ImageSlider from './ImageSlider'
import { SliderData } from './SliderData'

function Galeria() {
  return (
    <div className='chho'>
        <ImageSlider slides={SliderData}/>

    </div>
  )
}

export default Galeria