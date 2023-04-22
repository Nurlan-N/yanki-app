import React from 'react';
import styles from './Forgot.module.scss';
import ButtonSubmit from '../ButtonSubmit';
import close from '../../assets/img/icon/x.png';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const index = ({ display, onClose }) => {
  return (
    <div className={styles.root} style={display ? { display: 'inline' } : { display: 'none' }}>
      <div className={styles.close}>
        <img onClick={onClose} src={close} alt="Close" />
      </div>
      <h3>Forgot Password</h3>
      <form>
        <span style={{ color: 'red' }}></span>

        <div className="form-group mb-4">
          <label htmlFor="email">Enter your email and we will send you a code to reset your password and recover your account:</label>
          <input type="email" className="form-input" placeholder="Email..." required />
        </div>
        <ButtonSubmit title={'LOGIN'} />
      </form>
    </div>
  );
};

export default index;
