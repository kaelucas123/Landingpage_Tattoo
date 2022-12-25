import React from 'react'
import styles from '../LandingPage/LandingPage.module.css'

// import M
import Hero from '../../Components/Hero/Hero'
import Sobre_Mim from '../../Components/Sobre_Mim/Sobre_Mim'
import MenuBurguer from '../../Components/MenuBurguer/MenuBurguer'
import Galeria from '../../Components/Galeria/Galeria'

function LandingPage() {
  return (
    <div id={styles.container}>

      <section id={styles.bgImage}>
        <MenuBurguer></MenuBurguer>
        
        <Hero></Hero>
        <div className={styles.divisor}></div>
        <Sobre_Mim></Sobre_Mim>
        <div className={styles.divisor}></div>
        <Galeria></Galeria>

      </section>
    </div>
  )
}

export default LandingPage