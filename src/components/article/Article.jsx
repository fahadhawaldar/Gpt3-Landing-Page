import React from "react";

import styles from "./Artical.module.css";

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className={styles.article}>
      <div className={styles.articleimg}>
        <img src={imgUrl} alt="blog-img" />
      </div>
      <div className={styles.articlecontent}>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>

        <p className={styles.rfa}>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
