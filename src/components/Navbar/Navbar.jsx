import React, {useState} from "react";
import styles from "./Navbar.module.css";
//import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <div className={styles.leftContainer}>
                <img 
                    //src={getImageUrl("nav/KX.png")}
                    //alt="Image of initials" 
                    //className={styles.myInitials}
                    src="/assets/nav/KX.png" 
                    alt="Image of initials"
                    className={styles.myInitials}
                />
                <a className={styles.title }href="/">My Portfolio</a>
            </div>
            <div className={styles.menu}>
                <img 
                    className={styles.menuBtn}
                    src={
                        menuOpen 
                        ? "/assets/nav/closeIcon.png"//getImageUrl("nav/closeIcon.png")
                        : "/assets/nav/menuIcon.png"//getImageUrl("nav/menuIcon.png")
                    } 
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <div className={styles.menuItemsContainer}>
                    <ul 
                        className= {`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                        onClick={() => setMenuOpen(false)}
                    >
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#experience">Experience</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
    </nav>
    );
};