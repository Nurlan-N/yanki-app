import React from 'react';
import styles from './SearchBlock.module.scss';
import search from '../../assets/img/icon/search_black.png';
import img from '../../assets/img/categoryimg/1.png';

const index = () => {
  return (
    <div className={styles.root}>
      <div className={styles.searchTop}>
        <img className={styles.icon} src={search} alt="search" />
        <input className={styles.input} type="text" placeholder="Search..." />
      </div>
    </div>
  );
};

export default index;
