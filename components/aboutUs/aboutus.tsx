import styles from './aboutus.module.css'

function AboutUs(){
    return(
        <div className={styles.about}>
            <div className={styles.about__titleBox}>
                <div className={styles.about__description}>
                    <p>Mainstream - быстро развивающееся агентство полного цикла, где каждая деталь проработала до совершенства, для достижения высоких результатов наших клиентов.</p>
                </div>
                <div className={styles.about__logosection}>
                    <div className={styles.about__logosection__logo}></div>
                </div>
            </div>
            <div className={styles.about__headingfirst}>
                <p>Mainstream</p>
            </div>
            <div className={styles.about__headingsecond}> 
                <p>в цифрах</p>
            </div>

            <div className={styles.about__withNumber}>
                <div className={styles.about__withNumber__box1}>
                    <p className={styles.about__withNumber__number}>4+</p>
                    <p className={styles.about__withNumber__description}>года на рынке</p>
                </div>
                <div className={styles.about__withNumber__box2}>
                    <p className={styles.about__withNumber__number}>3</p>
                    <p className={styles.about__withNumber__description}>филиала по миру (UZB, UAE, TURKEY) </p>
                </div>
                <div className={styles.about__withNumber__box3}>
                    <p className={styles.about__withNumber__number}>150+</p>
                    <p className={styles.about__withNumber__description}>успешных проектов</p>
                </div>
                <div className={styles.about__withNumber__box4}>
                    <p className={styles.about__withNumber__number}>15<span className={styles.k}>k</span></p>
                    <p className={styles.about__withNumber__description}>рекламных материалов</p>
                </div>
                <div className={styles.about__withNumber__box5}>
                    <p className={styles.about__withNumber__number}>25+</p>
                    <p className={styles.about__withNumber__description}>сотрудников</p>
                </div>
                <div className={styles.about__withNumber__box6}>
                    <p className={styles.about__withNumber__number}>200<span className={styles.k}>k</span></p>
                    <p className={styles.about__withNumber__description}>привлечённых лидов</p>
                </div>
                <div className={styles.about__withNumber__box7}>
                    <p className={styles.about__withNumber__number}>1,126<span className={styles.mln}>млрд</span></p>
                    <p className={styles.about__withNumber__description}>просмотров на наших видео роликах</p>
                </div>
                <div className={styles.about__withNumber__box8}>
                    <p className={styles.about__withNumber__number}>3,49<span className={styles.mln}>млн</span></p>
                    <p className={styles.about__withNumber__description}>живых подписчиков привед ено нашим клиентам</p>
                </div>
                <div className={styles.about__withNumber__box9}>
                    <p className={styles.about__withNumber__number}>0,01 $</p>
                    <p className={styles.about__withNumber__description}>стоимость за переход по ссылке</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;