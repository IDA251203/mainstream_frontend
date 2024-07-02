"use client";

import { useState } from "react";
import styles from "./MenuButton.module.css";

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.cont}>
      <button
        className={`${styles.btn} ${isOpen ? styles.isOpen : ""}`}
        type="button"
        onClick={toggleMenu}
      >
        <span className={styles.burger}></span>
        <span className={styles.burgerText}></span>
      </button>

      <ul className={`${styles.menu} ${isOpen ? styles.isOpen : ""}`}>
        <li><a href="#">О компании</a></li>
        <li><a href="#">Услуги</a></li>
        <li><a href="#">Кейсы</a></li>
        <li><a href="#">Контакты</a></li>
      </ul>
    </div>
  );
};

export default MenuButton;

// "use client";

// import { useState, useRef } from "react";
// import styles from "./MenuButton.module.css";

// const MenuButton = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const aboutUsRef = useRef<HTMLLIElement>(null);
//   const partnershipRef = useRef<HTMLLIElement>(null);
//   const servicesRef = useRef<HTMLLIElement>(null);
//   const questionsRef = useRef<HTMLLIElement>(null);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const scrollToSection = (ref: React.RefObject<HTMLLIElement>) => {
//     ref.current?.scrollIntoView({ behavior: 'smooth' });
//     setIsOpen(false); // Menu yopish
//   };

//   return (
//     <div className={styles.cont}>
//       <button
//         className={`${styles.btn} ${isOpen ? styles.isOpen : ""}`}
//         type="button"
//         onClick={toggleMenu}
//       >
//         <span className={styles.burger}></span>
//         <span className={styles.burgerText}></span>
//       </button>

//       <ul className={`${styles.menu} ${isOpen ? styles.isOpen : ""}`}>
//         <li><span onClick={() => scrollToSection(aboutUsRef)}>О компании</span></li>
//         <li><span onClick={() => scrollToSection(partnershipRef)}>Услуги</span></li>
//         <li><span onClick={() => scrollToSection(servicesRef)}>Кейсы</span></li>
//         <li><span onClick={() => scrollToSection(questionsRef)}>Контакты</span></li>
//       </ul>
//     </div>
//   );
// };

// export default MenuButton;
