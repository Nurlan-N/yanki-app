import React, { useState } from 'react';
import styles from './ProfilePopUp.module.scss';

const ProfilePopUp = ({display,onCliclkSignIn,onClickRegiter}) => {

  

  return (
    <div className={styles.root} style={display ? {display: "inline"}: {display: "none"}}>
      <ul>
        <li onClick={onClickRegiter} >Register</li>
        <li onClick={onCliclkSignIn}>Sign In</li>
      </ul>
    </div>
  );
};


export default ProfilePopUp;
