import styles from './stagesofwork.module.css'

function StagesOfWork(){
    return(
        <div className={styles.stages}>
            <div className={styles.stages__backImage}>
                <div className={styles.stages__blackShape}>
                    <p>Этапы работы</p>
                </div>  
                <div className={styles.stages__purpleshape__text}>
                        <div className={styles.stages__purpleshape__box}>
                            <span>1</span>
                            Аудит вашего бизнеса      
                        </div>
                        <div className={styles.stages__purpleshape__box}>
                            <span>2</span> 
                            Определяем бюджет на продвижение
                        </div>
                        <div className={styles.stages__purpleshape__box}>
                            <span>3</span>
                            Определяем цели и показатели KPI
                        </div>
                        <div className={styles.stages__purpleshape__box}>
                            <span>4</span>
                            Разрабатываем стратегию продвижения и план работы, концепцию и медиа план
                        </div>
                        <div className={styles.stages__purpleshape__box}>
                            <span>5</span>
                            Приступаем к реализации 
                        </div>
                </div>

                <div className={styles.stages__description}>
                    <p>Каждый наш проект выполняется профессионально благодаря нашему опыту в различных областях. </p>
                    <p>У нас установлен четкий и эффективный регламент работы с каждой нишей, и мы несем ответственность за его выполнение.</p>
                </div>  
             </div>   
        </div>
    ); 
}

export default StagesOfWork;