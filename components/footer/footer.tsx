import styles from "./footer.module.css"
import Image from "next/image";

function Footer() {
    return(
        <div className={styles.footer}>
            <div className={styles.footer__shape}>
                <div className={styles.footer__shape__contact}>
                    <div>
                        <p className={styles.footer__shape__contact__pnoneNumber}>+998 90 981 23 56</p>
                        <p className={styles.footer__shape__contact__pnoneNumber}>+998 90 024 44 48</p>
                        <p className={styles.footer__shape__contact__gmail}>mainstream.uz@gmail.com</p>
                        <p className={styles.footer__shape__contact__address}>Узбекистан, г. Ташкент, </p>
                        <p className={styles.footer__shape__contact__address1}>Чиланзар 3, 44/1</p>
                    </div>
                </div>
                <div className={styles.footer__shape__logo}>
                    <div className={styles.footer__shape__img}>
                        <Image src={'/assets/img/logooo.png'} alt="logo" width={300} height={210}/>
                    </div>
                    <p>Права защищены Mainstream Global Design by Ruslan Mariarty</p>
                    {/* <p>Design by Ruslan Mariarty</p> */}
                    
                    <div className={styles.footer__circlebox}>
                        <Image src={'/assets/img/Vector1.png'} alt="logo" width={49.39} height={49.39}/>
                        <Image src={'/assets/img/Vector2.png'} alt="logo" width={49.39} height={49.39}/>
                        <Image src={'/assets/img/Vector3.png'} alt="logo" width={49.39} height={49.39}/>
                        <Image src={'/assets/img/Vector4.png'} alt="logo" width={49.39} height={49.39}/>
                        <Image src={'/assets/img/Vector5.png'} alt="logo" width={49.39} height={49.39}/>
                    </div>
                </div>
                <div className={styles.footer__shape__menu}>
                    <div>
                        <p>О компании</p>
                        <p>Услуги</p>
                        <p>Кейсы</p>
                        <p>Контакты</p>
                        <p>Курсы</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;