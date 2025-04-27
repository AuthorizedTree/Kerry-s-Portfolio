import React from "react";
import styles from "./Contact.module.css";
//import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact Information</h2>
        <p>Feel free to reach out!</p>
        
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img 
            src="/assets/contact/emailIcon.png" 
            alt="Email icon" 
          />
          <a href="mailto:kerryyaoxiao@outlook.com">Email</a>
        </li>
        <li className={styles.link}>
          <img
            src="/assets/contact/linkedinIcon.png"
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/kerry-xiao">Linkedin</a>
        </li>
        <li className={styles.link}>
          <img src="/assets/contact/githubIcon.png" alt="Github icon" />
          <a href="https://www.github.com/AuthorizedTree">Github</a>
        </li>
      </ul>
    </footer>
  );
};