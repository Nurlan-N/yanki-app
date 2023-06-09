import React, { useEffect, useState } from 'react';
import PageMap from '../../../components/client/PageMap';
import Submit from '../../../components/client/ButtonSubmit';
import row from '../../../assets/img/icon/down.png';
import { logout } from '../../../redux/slices/authSlice ';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useGetUserDetailsQuery } from '../../../redux/function/authService';
import { userData } from '../../../redux/function/authAction';
import { fetchOrders } from '../../../redux/slices/orderSlice';

const MyAccount = () => {
  const dispatch = useDispatch();
  const token = window.localStorage.getItem('userToken');
  const {error} = useSelector((state) => state.auth)
  const { data } = useGetUserDetailsQuery('userDetails', { pollingInterval: token });
  const { orders } = useSelector((state) => state.orders);
  const { register, handleSubmit, setValue } = useForm();
  const [buttonColor, setButtonColor] = useState('');
  const [selectButton, setSelectButton] = useState(2);
  const [showItems, setShowItems] = useState();
  const [errorNewPassword, setErrorNewPassword] = useState('');

  const submitForm =  (data) => {
    if (data.NewPassword !== data.ConfirimPassword) {
      setErrorNewPassword('Current password does not match');
      return
    }
    dispatch(userData(data))
    .then(() => {
      console.log('userData dispatched successfully');
    })
    .catch((error) => {
      console.log('Error dispatching userData:', error);
    });
  };

  useEffect(() => {
    if (data) {
      setValue('Name', data.name);
      setValue('Surname', data.surname);
      setValue('Email', data.email);
      setValue('Phone', data.phone);
      setValue('country', data.country);
      setValue('postalCode', data.postalcode);
      setValue('Username', data.username);

      dispatch(fetchOrders());
    }
  }, [data, token]);

  const showOrderItems = (id) => {
    if (showItems === id) {
      setShowItems();
    } else {
      setShowItems(id);
    }
  };

  const handleButtonClick = (e) => {
    setSelectButton(e);
    setButtonColor('#CCA88A');
  };

  return (
    <div className="account_wrapper" style={data && token ? {} : { display: 'none' }}>
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
              <Link to="/" style={{ zIndex: '1' }} onClick={() => dispatch(logout())}>
                Exit
              </Link>
            </div>
          </div>
        </div>
        <div className="orders" style={selectButton === 1 ? {} : { display: 'none' }}>
          {orders &&
            orders.map((item) => (
              <div key={item.id} className="order">
                <div className="top">
                  <div className="order_code my-auto">
                    <p>
                      № {item.no} от {item.createdAt}
                    </p>
                  </div>
                  <div className="order_status">
                    <h6>Status:</h6>
                    <h5>Rejected</h5>
                  </div>
                  <div className="order_price">
                    <h6>Order price:</h6>
                    <h5>{item.totalPrice}$</h5>
                  </div>
                  <div className="show_order" onClick={() => showOrderItems(item.id)}>
                    <img
                      src={row}
                      alt=""
                      style={showItems === item.id ? { rotate: '360deg' } : { rotate: '180deg' }}
                    />
                  </div>
                </div>
                <div
                  className="bottom"
                  style={
                    showItems === item.id ? { height: 250 * item.orderItems.length } : { height: 0 }
                  }>
                  {item.orderItems &&
                    item.orderItems.map((pr) => (
                      <div key={pr.id} className="product">
                        <div className="box_img">
                          <img style={{ width: '100px' }} src={pr.product.image} alt="" />
                          <div className="box_title">
                            <p>{pr.product.title}t</p>
                          </div>
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
                          <p>{pr.count}</p>
                        </div>
                        <div className="box_price">
                          <p>Price:</p>
                          <h5>{pr.product.price}$</h5>
                        </div>
                      </div>
                    ))}
                  <div className="order_data my-2 d-flex justify-content-between">
                    <div className="left">
                      <h6>Full Name: {item.createdBy}</h6>
                      <h6>Country: {item.country}</h6>
                    </div>
                    <div className="right">
                      <h6>Email: {item.email}</h6>
                      <h6>Phone: {item.phone}</h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="account_settings" style={selectButton === 2 ? {} : { display: 'none' }}>
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="personal_data">
              <h5>Personal Information:</h5>
              <div className="personal_data_input d-flex justify-content-between">
                <input type="text" id="name" {...register('Name')} placeholder={'Name'} />

                <input type="text" id="surname" {...register('Surname')} placeholder={'Surname'} />

                <input type="email" id="email" {...register('Email')} placeholder={'Email'} />
              </div>
            </div>
            <div className="username personal_data_input mt-5 d-flex justify-content-between">
              <input type="text" id="username" {...register('Username')} placeholder={'Username'} />
              <input type="tel" id="phone" {...register('Phone')} placeholder={'Phone'} />
            </div>

            <div className="addres_data col-lg-12  d-flex flex-wrap justify-content-between">
              <div className="col-lg-3">
                <h5>Password:</h5>
                <input
                  style={{ width: '100%' }}
                  type="password"
                  id="password"
                  required={true}
                  {...register('Password')}
                  placeholder={'Password'}
                />
                <span className='text text-danger'>{error && error}</span>
              </div>
              <div className="col-lg-3">
                <h5>New Password:</h5>
                <input
                  style={{ width: '100%' }}
                  type="password"
                  id="newPassword"
                  required={false}
                  {...register('NewPassword')}
                  placeholder={'New Password'}
                />
              </div>
              <div className="col-lg-3">
                <h5>Current Password:</h5>
                <input
                  style={{ width: '100%' }}
                  type="password"
                  id="currentPassword"
                  required={false}
                  {...register('ConfirimPassword')}
                  placeholder={'Confirim Password'}
                />
                <span className="text text-danger">{errorNewPassword}</span>
              </div>
            </div>
            <h5>Delivery Address:</h5>
            <div className="addres_data d-flex justify-content-between mb-3">
              <input
                type="text"
                required={false}
                id="address"
                {...register('country')}
                placeholder={'Country'}
              />
              <input
                type="text"
                id="postalcode"
                required={false}
                {...register('postalCode')}
                placeholder={'Postal Code'}
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
