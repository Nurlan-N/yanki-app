import close from '../../../assets/img/icon/x.png';
import { useForm } from 'react-hook-form';
import eye from '../../../assets/img/icon/eye.png';
import ButtonSubmit from '../ButtonSubmit';
import styles from './Register.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { confirmationUser, registerUser } from '../../../redux/function/authAction';
import { useState } from 'react';
import axios from 'axios';

const RegisterBlock = ({ display, onClose }) => {
  const { loading, error, success, message } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [errorNewPassword, setErrorNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmationDisplay, setConfirmationDisplay] = useState(false);
  const [code, setCode] = useState(null);

  const { register, handleSubmit } = useForm();

  const submitForm = (data) => {
    if (data.Password !== data.ConfirimPassword) {
      setErrorNewPassword('Current password does not match');
      return;
    }
    dispatch(registerUser(data));
    setConfirmationDisplay(true);
  };

  const ConfirmationHandler = async () => {
    if (code != null) {
      dispatch(confirmationUser(code));
      onClose();
    }
  };

  return (
    <>
      <div
        className={styles.root}
        style={
          display && confirmationDisplay == false ? { display: 'inline' } : { display: 'none' }
        }>
        <div className={styles.close}>
          <img onClick={onClose} src={close} alt="Close" />
        </div>
        <h3>Registration</h3>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="form-group">
            <label htmlFor="Name"></label>
            <input
              type="text"
              className="form-input"
              {...register('Name')}
              required
              placeholder="Name..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="SurName"></label>
            <input
              type="text"
              className="form-input"
              {...register('SurName')}
              required
              placeholder="SurName..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="UserName"></label>
            <input
              type="text"
              className="form-input"
              {...register('UserName')}
              required
              placeholder="User Name..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="Email"></label>
            <input
              type="email"
              className="form-input"
              {...register('Email')}
              required
              placeholder="Email..."
            />
          </div>
          <div className={styles.password}>
            <label htmlFor="Password"></label>
            <input
              type={showPassword ? 'text' : 'password'}
              className="form-input"
              {...register('Password')}
              required
              placeholder="Password..."
            />
            <img
              className={styles.eye}
              src={eye}
              onClick={() => setShowPassword(!showPassword)}
              alt="Show"
            />
          </div>
          <div className={styles.confirm}>
            <label htmlFor="confirmPassword"></label>
            <input
              type={showPassword ? 'text' : 'password'}
              className="form-input"
              {...register('ConfirimPassword')}
              required
              placeholder="Confirm Password..."
            />
            <img
              className={styles.eye}
              onClick={() => setShowPassword(!showPassword)}
              src={eye}
              alt="Show"
            />
            <span className="text text-danger">{errorNewPassword}</span>
          </div>
          <div className="mt-4 ">
            <ButtonSubmit title={loading ? 'loading' : 'Register'} />
          </div>
        </form>
      </div>
      <div
        className={styles.root}
        style={confirmationDisplay ? { display: 'inline' } : { display: 'none' }}>
        <div className={styles.close}>
          <img onClick={() => setConfirmationDisplay(false)} src={close} alt="Close" />
        </div>
        <h3>Forgot Password</h3>
        <span style={{ color: 'red' }}></span>
        <div className="form-group mb-4">
          <label htmlFor="email">
            Enter your email and we will send you a code to reset your password and recover your
            account:
          </label>
          <span className="text text-danger mt-3">{error}</span>
          <span className="text text-success mt-3">{message}</span>
          <input
            onChange={(e) => setCode(e.target.value)}
            type="email"
            className="form-input"
            placeholder="Email..."
            required
          />
        </div>
        <div onClick={() => ConfirmationHandler()} className="">
          <ButtonSubmit title={'Send'} />
        </div>
      </div>
    </>
  );
};

export default RegisterBlock;
