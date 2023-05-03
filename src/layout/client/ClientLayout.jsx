import React, { useState } from 'react';
import Header from '../../components/client/Header';
import Footer from '../../components/client/Footer';
import { Outlet } from 'react-router-dom';
import DrawerBlock from '../../components/client/DrawerBlock/index';
import ForgotBlock from '../../components/client/ForgotBlock';
import RegisterBlock from '../../components/client/RegisterBlock';
import { useGetUserDetailsQuery } from '../../redux/function/authService';
import Authorization from '../../components/client/AuthorizationBlock';


const ClientLayout = () => {
  const { data } = useGetUserDetailsQuery('userDetails', { pollingInterval: 900000 });
  const [cartDisplay, setCartDisplay] = useState(false);
  const [authorizationDisplay, setAuthorizationDisplay] = useState(false);
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
  return (
    <>
    <DrawerBlock cartDisplay={cartDisplay} onClose={() => setCartDisplay(false)} />
      <div className={cartDisplay ? 'd-none' : ''}></div>
      <Header
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
