import React, { useEffect, useState } from 'react';
import Header from '../../components/client/Header';
import Footer from '../../components/client/Footer';
import { Outlet } from 'react-router-dom';
import DrawerBlock from '../../components/client/DrawerBlock/index';
import ForgotBlock from '../../components/client/ForgotBlock';
import RegisterBlock from '../../components/client/RegisterBlock';
import Authorization from '../../components/client/AuthorizationBlock';


const ClientLayout = () => {
  const [cartDisplay, setCartDisplay] = useState(false);
  const [authorizationDisplay, setAuthorizationDisplay] = useState(false);
  console.log("🚀 ~ file: ClientLayout.jsx:16 ~ ClientLayout ~ authorizationDisplay:", authorizationDisplay)
  const [forgotDisplay, setForgotDisplay] = useState(false);
  const [registerDisplay, setRegisterDisplay] = useState(false);


  const registerHandler = () => {
    setRegisterDisplay(!registerDisplay);
    setAuthorizationDisplay(false);
  };
  const forgotHandler = () => {
    setForgotDisplay(!registerDisplay);
    setAuthorizationDisplay(false);
  };
  useEffect(() => {
    if (authorizationDisplay) {
      const handleOutsideClick = (event) => {
        if (authorizationDisplay && !event.target.closest('.modal-auth')) {
          setAuthorizationDisplay(false);
        }
      };
  
      window.addEventListener('click', handleOutsideClick);
  
      return () => {
        window.removeEventListener('click', handleOutsideClick);
      };
    }
  }, [authorizationDisplay]);
  return (
    <>
    <DrawerBlock onClickSignIn={() => setAuthorizationDisplay(!authorizationDisplay)} cartDisplay={cartDisplay} onClose={() => setCartDisplay(false)} />
      <div className={cartDisplay ? 'd-none' : ''}></div>
      <Header
        cartDisplay = {cartDisplay}
        onClickCart={() => setCartDisplay(!cartDisplay)}
        onClickSignIn={() => setAuthorizationDisplay(!authorizationDisplay)}
      />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ForgotBlock display={forgotDisplay} onClose={() => setForgotDisplay(false)} />
        <RegisterBlock display={registerDisplay} onClose={() => setRegisterDisplay(false)} />
        <Authorization
          display={authorizationDisplay}
          onClose={() => setAuthorizationDisplay(false)}
          onClickForgot={() => forgotHandler()}
          onClickRegister={() => registerHandler()}
        />
    </>
  );
};

export default ClientLayout;
