import React from 'react';
import styles from './Button.module.scss';

const index = ({ title }) => {
  return <button className={styles.button} type='submit'>{title}</button>;
};

export default index;
