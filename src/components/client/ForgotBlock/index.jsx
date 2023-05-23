import React, { useState } from 'react';
import styles from './Forgot.module.scss';
import ButtonSubmit from '../ButtonSubmit';
import close from '../../../assets/img/icon/x.png';
import axios from 'axios';

const ForgotBlock = ({ display, onClose }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const forgotHandler = async () => {
    try {
      const { data } = await axios.post(
        `http://217.76.63.20:44389/api/Auth/resetpassword?email=${email}`,
      );
      setMessage(data);
    } catch (error) {
      setErrorMessage(error.response.data);
    }
  };

  return (
    <div className={styles.root} style={display ? { display: 'inline' } : { display: 'none' }}>
      <div className={styles.close}>
        <img onClick={onClose} src={close} alt="Close" />
      </div>
      <h3>Forgot Password</h3>
      <span style={{ color: 'red' }}></span>
      <div className="form-group mb-4">
        <label htmlFor="email">
          Enter your email and we will send you a code to reset your password and recover your
          account:
        </label>
        <span className="text text-danger mt-3">{errorMessage}</span>
        <span className="text text-success mt-3">{message}</span>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="form-input"
          placeholder="Email..."
          required
        />
      </div>
      <div onClick={() => forgotHandler()} className="">
        <ButtonSubmit title={'Send...'} />
      </div>
    </div>
  );
};

export default ForgotBlock;
