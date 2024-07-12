import styles from "./question.module.css";
import * as React from 'react';
import Image from "next/image"; 

function Questions() {  
    return (
        <div className={styles.questions}>
            <div className={styles.questions__box}>
                <div className={styles.questions__box__sectionTitle}>
                    <p className={styles.questions__box__sectionTitle__title}>Остались вопросы?</p>
                    <p className={styles.questions__box__sectionTitle__description}>Оставьте контактные данные, наши менеджеры свяжутся с Вами и проконсультируют</p>
                    <Image src={"/assets/img/logo_purple.jpg"} alt="logo purple" width={400} height={100} className={styles.questions__box__sectionTitle__img}/>
                </div> 
                <div className={styles.questions__box__sectionInputs}>
                    <div className={styles.formContainer}>
                        <input className={styles.input} type="text" placeholder="Имя и фамилия" />
                        <input className={styles.input} type="text" placeholder="Номер телефона" />
                        <input className={styles.input} type="text" placeholder="Название компании" />
                        <button className={styles.button} type="submit">Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Questions;
