import React from 'react'
import styles from "../svgText/svgtext.module.css"

function SvgText() {
  return (
    <div className={styles.main}>
        <video className={styles.video} autoPlay playsInline muted loop preload='true'>
            <source src="https://player.vimeo.com/external/371745222.sd.mp4?s=17a4f2bb178b42f6a7b7dfeeeb1a131227ee32b3&profile_id=164&oauth2_token_id=57447761" />
        </video>
        <svg className={styles.svg} height="100%" width="100%">
            <defs>
                <mask id='mask' x="0" y="0" height="100%" width="100%" >
                    <rect className={styles.rect} x="0" y="0" height="100%" width="100%"/>

                    
                    <text x="50%" y="50%" fill="red" textAnchor='middle'>TV BLAND</text>
                </mask>
                
            </defs>
            <rect id='last' className={styles.rect} x="0" y="0" height="100%" width="100%"/>       
        </svg>
    </div>
  )
}

export default SvgText