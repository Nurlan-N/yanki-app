import React from 'react';
import styles from './PageMap.module.scss'
import righRow from '../../assets/img/icon/right.png';

const index = ({title}) => {
  return (
    <div className={styles.map}>
      <p>Home</p>
      <img src={righRow} alt="" />
      <p>{title}</p>
    </div>
  );
};

export default index;
