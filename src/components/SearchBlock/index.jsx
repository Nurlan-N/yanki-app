import React from 'react';
import styles from './SearchBlock.module.scss';
import search from '../../assets/img/icon/search_black.png';

const index = () => {
  return (
    <div className={styles.root}>
      <img className={styles.icon} src={search} alt="search" />
      <input className={styles.input} type="text" placeholder="Search..." />
    </div>
  );
};

export default index;
