import React from "react";
import styles from "./AboutMe.module.css";
import { getImageUrl } from "../../utils";

export const AboutMe = () => {
    return ( 
        <section className = {styles.container} id="about">
            <h2 className = {styles.title}>About Me</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl("about/IMG_20250309_153120722.jpg")}
                    alt="This is an image of me."
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/website-development-neon-label-vector-26918220.png")}
                            alt="Neon Website Development."
                            className={styles.neonWebsite}
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Web Development</h3>
                            <p>Experienced with HTML and CSS for structuring and styling responsive web pages. Experienced with modern web frameworks like ReactJS, Vue.js, and Node.js to develop interactive and scalable web applications.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/linux_penguin.png")}
                            alt="This is an image of the linux mascot."
                            className={styles.linuxPenguin}
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Operating Systems & Development Environments</h3>
                            <p>Proficient in Linux environments, with experience in system navigation, scripting, and software development.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/glowing-neon-line-programming-language.png")}
                            alt="Neon Programming Language."
                            className={styles.neonProgrammingLanguage}
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Programming Languages</h3>
                            <p>C/C++, Python, Java, JavaScript – Proficiency in multiple programming languages for software development</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/Router.png")}
                            alt="This is an image of me."
                            className={styles.router}
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Network Engineering</h3>
                            <p>Experience with designing, maintaining, implementing, configuring networks</p> 
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};