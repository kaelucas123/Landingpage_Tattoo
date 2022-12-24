import React from 'react'
import styles from '../LandingPage/LandingPage.module.css'

import Hero from '../../Components/Hero/Hero'

function LandingPage() {
  return (
    <div id={styles.container}>
        <section id={styles.bgImage}></section>
        <Hero></Hero>
    </div>
  )
}

export default LandingPage