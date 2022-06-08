import Head from "next/head";

import styles from "../styles/404Page.module.css";

export default function Custom404() {
  return (
    <div className={styles.outerDiv}>
      <Head>
        <title>404 Not Found</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
      </Head>
      <div>
        <div className={styles.avatar}></div>
        <h1 className="display-6 my-3" style={{ color: "#1D0C26" }}>
          未找到该页面~
        </h1>
      </div>
      <div>
        <h1 className={styles.num404}>404</h1>
        <div className={styles.text404Div}>
          <h2 className={styles.text404}>This page could not be found.</h2>
        </div>
      </div>
    </div>
  );
}
