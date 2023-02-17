import React from 'react';
import styles from "../hero/hero.module.css";
import Image from 'next/image';


function Hero() {
  return ( 
    <main className={styles.main} >
      <div className={styles.text} >
        <h3>
          TV Show and Web Series Database
        </h3>
        <p>Create personalised schedules, episodes guides, cast crew and character information</p>
      </div>
      <div className={styles.videoContainer} >
        <video autoPlay muted loop className={styles.videoBackground}>
          <source src="/assets/trailer.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.overlay} ></div>
      
    </main>
  )
}

export default Hero