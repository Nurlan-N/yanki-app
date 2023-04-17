import React from 'react';
import styles from './Button.module.scss';

const index = ({ title }) => {
  return <button className={styles.button} type='submite'>{title}</button>;
};

export default index;
