import styles from "./Brand.module.css";
import React from "react";

import { google, slack, shopify, atlassian, dropbox } from "./imports";

const Brand = () => {
  return (
    <div className={`${styles.brand} section__padding`}>
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
};

export default Brand;
