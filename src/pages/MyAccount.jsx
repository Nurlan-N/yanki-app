import React, { useEffect, useState } from 'react';
import PageMap from '../components/PageMap';
import Submit from '../components/ButtonSubmit';
import row from '../assets/img/icon/down.png';
import prImage from '../assets/img/product/min-1.svg';
import { logout, setCredentials } from '../redux/slices/authSlice ';
import { useDispatch, useSelector } from 'react-redux';
import { Link, redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useGetUserDetailsQuery } from '../redux/function/authService';
import { userData } from '../redux/function/authAction';

import axios from 'axios';

const MyAccount = () => {
  const dispatch = useDispatch();
  const { data } = useGetUserDetailsQuery('userDetails', { pollingInterval: 900000 });
  const { userToken, userInfo } = useSelector((state) => state.auth);
  console.log("🚀 ~ file: MyAccount.jsx:19 ~ MyAccount ~ userInfo:", userInfo)
  const { register, handleSubmit,setValue } = useForm();
  const [buttonColor, setButtonColor] = useState('');
  const [name, setName] = useState('');
  const [selectButton, setSelectButton] = useState(2);
  const [showItems, setShowItems] = useState(false);


  const submitForm = (data) => {
    if (data.NewPassword.lenght >0 && data.NewPassword !== data.confirmPassword) {
      alert('Password mismatch');
    }
    console.log(data);
    dispatch(userData(data));
  };

  useEffect(()=>{
    if (data) {
      setValue('Name',data.name)
      setValue('Surname',data.surname)
      setValue('Email',data.email)
      setValue('Phone',data.phone)
      setValue('country',data.country)
      setValue('postalCode',data.postalcode)
      setValue('Username',data.username)
      setName(data.name)
    }
  },[data])

  useEffect(() => {
    dispatch(setCredentials());
  }, []);

  const showOrderItems = () => setShowItems(!showItems);

  const handleButtonClick = (e) => {
    setSelectButton(e);
    setButtonColor('#CCA88A');
  };

  return (
    <div className="account_wrapper" style={userToken ? {} : { display: 'none' }}>
      <div className="container">
        <div className="lg-version">
          <PageMap title={'My Account'} />
          <div className="accont_menu">
            <div
              className="menu_item"
              style={selectButton === 1 ? { backgroundColor: buttonColor } : null}
              onClick={() => handleButtonClick(1)}>
              <button>History of Orders</button>
            </div>
            <div
              className="menu_item center_btn"
              style={
                selectButton === 2
                  ? { backgroundColor: buttonColor }
                  : { backgroundColor: '#ffffff' }
              }
              onClick={() => handleButtonClick(2)}>
              <button>Personal Data</button>
            </div>
            <div
              className="menu_item"
              style={selectButton === 3 ? { backgroundColor: buttonColor } : null}
              onClick={() => handleButtonClick(3)}>
              <Link to="/" onClick={() => dispatch(logout())}>
                Exit
              </Link>
            </div>
          </div>
        </div>
        <div className="orders" style={selectButton === 1 ? {} : { display: 'none' }}>
          <div className="order">
            <div className="top">
              <div className="order_code my-auto">
                <p>№ 718 от 28.09.21</p>
              </div>
              <div className="order_status">
                <h6>Status:</h6>
                <h5>Rejected</h5>
              </div>
              <div className="order_price">
                <h6>Order price:</h6>
                <h5>13580$</h5>
              </div>
              <div className="show_order" onClick={() => showOrderItems()}>
                <img
                  src={row}
                  alt=""
                  style={showItems ? { rotate: '360deg' } : { rotate: '180deg' }}
                />
              </div>
            </div>
            <div className="bottom" style={showItems ? { height: 400 } : { height: 0 }}>
              <div className="product">
                <div className="box_img">
                  <img src={prImage} alt="" />
                  <p>Cream coat</p>
                </div>
                <div className="box_color">
                  <button className="color"></button>
                </div>
                <div className="box_size">
                  <p>Size :</p>
                  <p>XL</p>
                </div>
                <div className="box_count">
                  <p>Count :</p>
                  <p>2</p>
                </div>
                <div className="box_price">
                  <p>Price:</p>
                  <h5>9450$</h5>
                </div>
              </div>
              <div className="product">
                <div className="box_img">
                  <img src={prImage} alt="" />
                  <p>Cream coat</p>
                </div>
                <div className="box_color">
                  <button className="color"></button>
                </div>
                <div className="box_size">
                  <p>Size :</p>
                  <p>XL</p>
                </div>
                <div className="box_count">
                  <p>Count :</p>
                  <p>2</p>
                </div>
                <div className="box_price">
                  <p>Price:</p>
                  <h5>9450$</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="order">
            <div className="top">
              <div className="order_code my-auto">
                <p>№ 718 от 28.09.21</p>
              </div>
              <div className="order_status">
                <h6>Status:</h6>
                <h5>Rejected</h5>
              </div>
              <div className="order_price">
                <h6>Order price:</h6>
                <h5>13580$</h5>
              </div>
              <div className="show_order" onClick={() => showOrderItems()}>
                <img
                  src={row}
                  alt=""
                  style={showItems ? { rotate: '360deg' } : { rotate: '180deg' }}
                />
              </div>
            </div>
            <div className="bottom" style={showItems ? { height: 400 } : { height: 0 }}>
              <div className="product">
                <div className="box_img">
                  <img src={prImage} alt="" />
                  <p>Cream coat</p>
                </div>
                <div className="box_color">
                  <button className="color"></button>
                </div>
                <div className="box_size">
                  <p>Size :</p>
                  <p>XL</p>
                </div>
                <div className="box_count">
                  <p>Count :</p>
                  <p>2</p>
                </div>
                <div className="box_price">
                  <p>Price:</p>
                  <h5>9450$</h5>
                </div>
              </div>
              <div className="product">
                <div className="box_img">
                  <img src={prImage} alt="" />
                  <p>Cream coat</p>
                </div>
                <div className="box_color">
                  <button className="color"></button>
                </div>
                <div className="box_size">
                  <p>Size :</p>
                  <p>XL</p>
                </div>
                <div className="box_count">
                  <p>Count :</p>
                  <p>2</p>
                </div>
                <div className="box_price">
                  <p>Price:</p>
                  <h5>9450$</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="account_settings" style={selectButton === 2 ? {} : { display: 'none' }}>
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="personal_data">
              <h5>Personal Information:</h5>
              <div className="personal_data_input d-flex justify-content-between">
                <input
                  type="text"
                  id="name"
                  {...register('Name')}
                  defaultValue={name}
                  placeholder={'Name'}
                  //onChange={(e) => setName(e.target.value)}
                />

                <input
                  type="text"
                  id="surname"
                  defaultValue={data?.surname}
                  {...register('Surname')}
                  placeholder={'Surname'}
                  //onChange={(e) => setSurname(e.target.value)}
                />

                <input
                  type="email"
                  id="email"
                  defaultValue={data?.email}
                  {...register('Email')}
                  placeholder={'Email'}
                  //onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="username personal_data_input mt-5 d-flex justify-content-between">
              <input
                type="text"
                id="username"
                defaultValue={data?.username}
                {...register('Username')}
                placeholder={'Username'}
                //onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="tel"
                id="phone"
                defaultValue={data?.phone}
                {...register('Phone')}
                placeholder={'Phone'}
                //onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <h5>Password:</h5>
            <div className="addres_data d-flex justify-content-between">
              <input
                style={{ width: '20%' }}
                type="password"
                id="password"
                required={true} 
                {...register('Password')}
                placeholder={'Password'}
                //onChange={(e) => setOldPassword(e.target.value)}
              />

              <input
                type="password"
                style={{ width: '30%' }}
                id="newPassword"
                required={false}
                {...register('NewPassword')}
                placeholder={'New Password'}
                //onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                style={{ width: '30%' }}
                id="currentPassword"
                required={false} 
                {...register('ConfirimPassword')}
                placeholder={'Confirim Password'}
                //onChange={(e) => checkNewPassword(e.target.value)}
              />
            </div>
            <h5>Delivery Address:</h5>
            <div className="addres_data d-flex justify-content-between mb-3">
              <input
                type="text"
                required={false} 
                id="address"
                defaultValue={data?.country}
                {...register('country')}
                placeholder={'Country'}
                //onChange={(e) => setAddress(e.target.value)}
              />
              <input
                type="text"
                id="postalcode"
                required={false} 
                defaultValue={data?.postalcode}
                {...register('postalCode')}
                placeholder={'Postal Code'}
                //onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
            <Submit title={'UPDATE INFO'} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
