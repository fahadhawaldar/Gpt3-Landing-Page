import React from "react";

import styles from "./Footer.module.css";

import flogo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className={`${styles.footer} section__padding`}>
      <div className={styles.footerheading}>
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
        <div className={styles.footerbtn}>
          <p>Request Early Access</p>
        </div>
      </div>

      <div className={styles.footerlinks}>
        <div className={styles.footerlogo}>
          <img src={flogo} alt="gpt3-logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className={styles.links}>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className={styles.links}>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p> Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className={styles.links}>
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className={styles.footercopyright}>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
