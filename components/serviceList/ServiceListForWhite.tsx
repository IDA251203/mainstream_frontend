import React from 'react';
import styles from './ServiceList.module.css';

interface ServiceListPropsForPurple {
  items: string[];
}

const ServiceListForWhite: React.FC<ServiceListPropsForPurple> = ({ items }) => {
  return (
    <ul className={styles.serviceList}>
      {items.map((item, index) => (
        <li key={index} className={styles.serviceListItem1}>
          <span className={styles.serviceListItem__iconPurple}>▲</span> {item}
        </li>
      ))}
    </ul>
  );
};

export default ServiceListForWhite;