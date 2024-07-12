import ServiceListForPurple from '../serviceList/ServiceList';
import ServiceListForblack from '../serviceList/ServiceListForBlack';
import ServiceListForWhite from '../serviceList/ServiceListForWhite';
import styles from './services.module.css'

const services4 = [
    'Посты для социальных сетей',
    'Motion ролики', 
    'Брендинг',
    'Дизайн наружной рекламы', 
    '3D моделирование',
    'VFX - ролики',
    'Дизайн печатной продукции',
  ];
const services10 = [
    'Одностраничный сайт',
    'Корпоративный сайт',
    'Интернет Магазин',
    'SEO-оптимизация',
    'Баннерная реклама',
    'Приложение',
    'Поиск уязвимости и лечение',
  ];
const services3 = [
    'Маркетинговая стратегия',
    'Таргетирование рекламы',
    'SMM - менеджмент',
    'Копирайтинг',
    'Развитие личного бренда',
    'Инфлюенс маркетинг',
  ];
const services14 = [
      'Разработка телеграм ботов',
      'Разработка бота с интеграцией приложения',
      'Арбитраж трафика',
      'Техническая поддержка ботов',
      'Чат-боты (Instagram, Telegram)',
      'Интеграция ИИ',
  ];
  
const services8 = [
    'Профессиональная видео-съёмка',
    'Профессиональная фото-съёмка',
    'Reels-видео (Мобилография)',
    'Съёмка рекламных роликов',
    'Сторисмейкинг',
    'Съёмка с дрона', 
    'Монтаж', 
];

function Services(){ 
    return(
        <div className={styles.services}>
            <p className={styles.services__title}>Услуги</p>
            
            <div className={styles.gridContainer}>
                <div className={`${styles.gridItem} ${styles.item1}`}></div>
                <div className={`${styles.gridItem} ${styles.item2}`}></div>
                <div className={`${styles.gridItem} ${styles.item3}`}>
                    <ServiceListForblack items={services3}/>      
                </div>   
                <div className={`${styles.gridItem} ${styles.item4}`}>
                    <ServiceListForPurple items={services4}/>
                </div>
                <div className={`${styles.gridItem} ${styles.item5}`}></div>
                <div className={`${styles.gridItem} ${styles.item6}`}></div>

                <div className={`${styles.gridItem} ${styles.item7}`}></div>
                <div className={`${styles.gridItem} ${styles.item8}`}>
                    <ServiceListForWhite items={services8}/>
                </div>
                <div className={`${styles.gridItem} ${styles.item9}`}></div>  
                <div className={`${styles.gridItem} ${styles.item10}`}>
                    <ServiceListForPurple items={services10} />
                </div>
                <div className={`${styles.gridItem} ${styles.item11}`}></div>
                <div className={`${styles.gridItem} ${styles.item12}`}></div>

                <div className={`${styles.gridItem} ${styles.item13}`}></div>
                <div className={`${styles.gridItem} ${styles.item14}`}>
                    <ServiceListForblack items={services14}/>
                </div>
                <div className={`${styles.gridItem} ${styles.item15}`}></div> 
            </div>

            <div className={styles.services__calc}>
                <div className={styles.services__calc__btn}>
                    <p>Калькулятор услуг</p>
                </div>
                <div className={styles.services__calc__description}>
                    <p>Онлайн калькулятор поможет посчитать сколько стоят интересующие Вас услуги</p>
                </div> 
            </div>
        </div>
    );
}

export default Services;