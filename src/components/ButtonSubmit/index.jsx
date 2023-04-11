import React from 'react';
import styles from './Button.module.scss';

const index = ({ title }) => {
  return <button className={styles.button}>{title}</button>;
};

export default index;
