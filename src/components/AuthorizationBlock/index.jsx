import React, { useEffect, useState } from 'react';
import styles from './Authorization.module.scss';
import ButtonSubmit from '../ButtonSubmit';
import Toast from 'react-bootstrap/Toast';

import close from '../../assets/img/icon/x.png';
import eye from '../../assets/img/icon/eye.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../redux/function/authAction';
import { useForm } from 'react-hook-form';

const Authorization = ({ display, onClose, onClickRegister }) => {
  const [showPasswod, setShowPassword] = useState(false);
  const { loading, error, login } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const { register, handleSubmit } = useForm();

  const submitForm = (data) => {
    dispatch(userLogin(data));
  };
  return (
    <>
      <div
        className={styles.root}
        style={display === true && login === false ? { display: 'inline' } : { display: 'none' }}>
        <div className={styles.close}>
          <img onClick={onClose} src={close} alt="Close" />
        </div>
        <h3>Authorization</h3>
        <form onSubmit={handleSubmit(submitForm)}>
          <span style={{ color: 'red' }}></span>

          <div className="form-group">
            <label htmlFor="email"></label>
            <input
              type="email"
              className="form-input"
              {...register('email')}
              placeholder="Email..."
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"></label>
            <input
              type="password"
              className="form-input"
              {...register('password')}
              placeholder="Email..."
              required
            />
            <img
              className={styles.eye}
              onClick={() => setShowPassword(!showPasswod)}
              src={eye}
              alt="Show"
            />
          </div>
          <div className={styles.menu}>
            <Link>Forgot password?</Link>
            <Link onClick={onClickRegister}>Don't have an account?</Link>
          </div>
          <ButtonSubmit title={loading ? 'loading' : 'LOGIN'} />
        </form>
      </div>
    </>
  );
};

export default Authorization;
