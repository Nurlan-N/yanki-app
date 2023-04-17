import React, { useEffect, useState } from 'react';
import styles from './Authorization.module.scss';
import ButtonSubmit from '../ButtonSubmit';
import Toast from 'react-bootstrap/Toast';

import close from '../../assets/img/icon/x.png';
import eye from '../../assets/img/icon/eye.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Authorization = ({ display, onClose }) => {
  const [showPasswod, setShowPassword] = useState(false);
  const [formValue, setForumValue] = useState({ email: '', password: '' });
  const [token, setToken] = useState(null);
  const [fechError, setFechError] = useState('');
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);

  ///Input Value
  const handleInput = (e) => {
    const { name, value } = e.target;
    setForumValue({ ...formValue, [name]: value });
  };

  ///Submit Form
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
    axios
      .post('https://localhost:44389/api/auth/login', formValue)
      .then((response) => {
        setToken(response.data);
        console.log(token);
        setShow(true)
      })
      .catch((error) => {
        setFechError('Email or password does not match!!!');
        console.log(error);
      });
  };

  if (show) {
    axios
      .get('https://localhost:44389/api/auth/email', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // ///User Name & Email
  // useEffect(() => {
  //   axios
  //     .get('https://localhost:44389/api/auth/email', {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((response) => {
  //       setUser(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [token]);

  //console.log('Kullanıcı adı: ' + user.name + 'Email: ' + user.email);

  return (
    <>
      <Toast className={styles.toaster} onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">YANKI</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Hello, {user !== null ? user.name : ""}</Toast.Body>
      </Toast>
      <div
        className={styles.root}
        style={display && token === null ? { display: 'inline' } : { display: 'none' }}>
        <div className={styles.close}>
          <img onClick={onClose} src={close} alt="Close" />
        </div>
        <h3>Authorization</h3>
        <form action="" onSubmit={handleFormSubmit}>
          <span style={{ color: 'red' }}>{fechError}</span>

          <input
            name="email"
            value={formValue.email}
            onChange={handleInput}
            type="email"
            placeholder="Email..."
          />
          <input
            name="password"
            value={formValue.password}
            onChange={handleInput}
            className={styles.password}
            type={showPasswod ? 'text' : 'password'}
            placeholder="Password"
          />
          <img
            className={styles.eye}
            onClick={() => setShowPassword(!showPasswod)}
            src={eye}
            alt="Show"
          />
          <div className={styles.menu}>
            <Link>Forgot password?</Link>
            <Link>Don't have an account?</Link>
          </div>
          <ButtonSubmit title={'LOGIN'} />
        </form>
      </div>
    </>
  );
};

export default Authorization;
