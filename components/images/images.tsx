import styles from './images.module.css' 

function Images(){  
    return(
        <div className={styles.images}>
            <div className={styles.images__cont1}>
                <div className={styles.images__box1}>
                    <p>Создаём</p>
                </div>
            </div>
            <div className={styles.images__cont2}>
                <div className={styles.images__box2}>
                    <p>Реализуем</p>
                </div>
            </div>
            <div className={styles.images__cont3}>
                <div className={styles.images__box3}>
                    <p>Продвигаем</p>
                </div>
            </div>
        </div>
    );
}

export default Images;