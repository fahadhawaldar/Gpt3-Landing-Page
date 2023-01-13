import React from "react";

import styles from "./Header.module.css";

import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className={`${styles.header} section__padding`} id='home'>
      <div className={styles.headercontent}>
        <h1 className="gradient__text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Let’s Build Something amazing with GPT-3 OpenAI Yet bed any for
          travelling assistance indulgence unpleasing. Not thoughts all exercise
          blessing. Indulgence way everything joy alteration boisterous the
          attachment. Party we years to order allow asked of. Your Email Address
          Get Started 1.6k+ 1,600 people requested access a visit in last 24
          hours
        </p>
        <div className={styles.headerinput}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email Address"
          />
          <button type="button">Get Started</button>
        </div>

        <div className={styles.headerpeople}>
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>

      </div>
        <div className={styles.headerimage}>
          <img src={ai} alt="ai" />
        </div>
    </div>
  );
};

export default Header;
