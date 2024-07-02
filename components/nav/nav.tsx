"use client";

import { useRef } from 'react';
import Services from '../Services/services';
import StagesOfWork from '../StagesOfWork/stagesofwork';
import AboutUs from '../aboutUs/aboutus';
import Images from '../images/images';
import MenuButton from '../menuButton/MenuButton';
import Nameless from '../nameless/nameless';
import Partnership from '../partnership/partnership';
import Questions from '../questions/questions';
import SMM from '../smm/smm';
import Video from '../video/video';
import styles from './nav.module.css'; 
import { useState } from "react";

function Nav() { 
    const aboutUsRef = useRef<HTMLElement>(null);
    const partnershipRef = useRef<HTMLElement>(null);
    const servicesRef = useRef<HTMLElement>(null);
    const questionsRef = useRef<HTMLElement>(null);

    const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
       <>
        <div className={styles.nav}>
            <div className={styles.nav__logo}></div>
            <div className={styles.nav__menu}>
                <div className={styles.nav__menu__block}>
                    <p onClick={() => scrollToSection(aboutUsRef)}>О компании</p>
                    <p onClick={() => scrollToSection(partnershipRef)}>Услуги</p>
                    <p onClick={() => scrollToSection(servicesRef)}>Кейсы</p>
                    <p onClick={() => scrollToSection(questionsRef)}>Контакты</p>
                </div>

                <div className={styles.nav__circle}>
                <select className={styles.languageselector}>
                    <option value="ru">Ru</option>
                    <option value="en" selected>EN</option>
                    <option value="uz">UZ</option>
                </select> 
                </div>

                <div className={styles.nav__courses}>
                    <p>Курсы</p>
                </div>
                <MenuButton/>
                {/* <div className={styles.cont}>
                    <button
                    className={`${styles.btn} ${isOpen ? styles.isOpen : ""}`}
                    type="button"
                    onClick={toggleMenu}
                    >
                        <span className={styles.burger}></span>
                        <span className={styles.burgerText}></span>
                    </button>
                    <div className={styles.cont__text}>
                    <ul className={`${styles.menu} ${isOpen ? styles.isOpen : ""}`}>
                        <li onClick={() => scrollToSection(aboutUsRef)}>О компании</li>
                        <li onClick={() => scrollToSection(partnershipRef)}>Услуги</li>
                        <li onClick={() => scrollToSection(servicesRef)}>Кейсы</li>
                        <li onClick={() => scrollToSection(questionsRef)}>Контакты</li>
                    </ul>
                    </div>
                    </div> */}
                </div>
        </div>

        <section>
            <Video/>
        </section>
        <section ref={aboutUsRef}>
            <AboutUs/>
        </section>
        <section ref={partnershipRef}>
            <Partnership/>
        </section>
        <section>
            <StagesOfWork/>
        </section>
        <section>
            <SMM/>
        </section>
        <section>
            <Images/>
        </section>
        <section ref={servicesRef}>
            <Services/>
        </section>
        <section>
            <Nameless/>
        </section>
        <section ref={questionsRef}>
            <Questions/>
        </section>
       </>
    );
}

export default Nav;
