import styles from './stagesofwork.module.css'

function StagesOfWork(){
    return(
        <div className={styles.stages}>
            <div className={styles.stages__backImage}>
                <div className={styles.stages__blackShape}>
                    <p>Этапы работы</p>
                </div>
                <div className=''></div>
            </div> 
        </div>
    );
}

export default StagesOfWork;