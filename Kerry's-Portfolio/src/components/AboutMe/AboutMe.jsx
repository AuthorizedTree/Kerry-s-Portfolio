import React from "react";
import styles from "./AboutMe.module.css";
import { getImageUrl } from "../../utils";

export const AboutMe = () => {
    return ( 
        <section className = {styles.container}>
            <h2 className = {styles.title}>About Me</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl("about/aboutImage.png")}
                    alt="This is an image of me."
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/cursorIcon.png")}
                            alt="This is an image of me."
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I am a frontend developer with experience with building websites.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/serverIcon.png")}
                            alt="This is an image of me."
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>Add some shit here.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/uiIcon.png")}
                            alt="This is an image of me."
                        />
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>Add some shit here.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/uiIcon.png")}
                            alt="This is an image of me."
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Network Engineer</h3>
                            <p>Add some shit here.</p> 
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};