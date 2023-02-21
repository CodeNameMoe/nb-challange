import React from 'react'
import styles from "../navbar/navbar.module.css";
import searchIcon from "../../../public/assets/search.png"
import Image from 'next/image'
import Link from 'next/link';
 
function NavBar() {
  return (
    <nav className={styles.navbar}>
      <section className={styles.navitems}>
        <Link className={styles.logoLink} href="/">
          <h2 >TV BLAND</h2>
        </Link>
        <Image
            id='icon'
            src={searchIcon}
            alt="Search icon"
            width={25}
            height={25}
        />  
        </section>
    </nav>
        
        
  )
}

export default NavBar