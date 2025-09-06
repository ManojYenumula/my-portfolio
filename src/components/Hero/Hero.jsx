import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Manoj</h1>
        <p className={styles.description}>
        I'm a Full-Stack Developer specializing in the MERN stack—building fast, scalable web applications with seamless front-end experiences and powerful, optimized back-ends. Let’s connect if you want to see my work!
        </p>
        <a href="mailto:ymdnnaidu@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/manoj.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
