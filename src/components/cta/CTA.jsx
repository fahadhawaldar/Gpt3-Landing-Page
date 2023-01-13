import styles from './CTA.module.css'
import React from 'react'

const CTA = () => {
  return (
    <div className={`${styles.cta}`} >
      <div className={styles.ctacontent}>
        <p>Request Early Access to Get Started</p>
        <h3>Register today & start exploring the endless possiblities.</h3>
      </div>
      <div className={styles.ctabtn}>
        <button type='button'>Get Started</button>
      </div>
    </div>
  )
}

export default CTA