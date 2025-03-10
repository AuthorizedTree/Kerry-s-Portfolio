import React from "react";
import styles from "./Myself.module.css";
import { getImageUrl } from "../../utils";

export const Myself = () => {
    return ( 
        <section className = {styles.container}>
            <div className = {styles.content}>
                <h1 className = {styles.title}>
                    Hello, My name is Kerry Xiao.
                </h1>
                <p className = {styles.description}>I am computer science student at the University of Virginia who is interested in software engineering, cybersecurity, and network engineering.</p>
                <a href="mailto:kerryyaoxiao@outlook.com" className = {styles.contactBtn}>Contact Me</a>
            </div>
            <img 
                src={getImageUrl("myself/IMG_20250309_152745386_HDR.jpg")} 
                alt="Image of myself" 
                className={styles.myselfImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};