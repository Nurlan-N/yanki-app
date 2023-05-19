import React from 'react';
import PageMap from '../../../components/client/PageMap/index';
import { useForm } from 'react-hook-form';
import dltIcon from '../../../assets/img/icon/delete.png';
import ButtonSubmit from '../../../components/client/ButtonSubmit';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBasket } from '../../../redux/slices/productSlice';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useGetUserDetailsQuery } from '../../../redux/function/authService';

const sizeOptions = [
  { value: 'xl', label: 'XL' },
  { value: 'xxl', label: 'XXL' },
  { value: 'ms', label: 'MS' },
];
const SizeSelect = () => (
  <Select className="size-select" options={sizeOptions} placeholder="Size.." />
);
const Cart = () => {
  const { register, handleSubmit, setValue } = useForm();

  const { data } = useGetUserDetailsQuery('userDetails', { pollingInterval: 900000 });
  const { basket } = useSelector((state) => state.product);
  const [basketState, setBasketState] = useState(false);
  const [count, setCount] = useState(1);
  const token = localStorage.getItem('userToken');

  const submitForm = async (data) => {
    try {
      await axios.post(`https://217.76.63.20:44389/api/Order/checkout`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBasketState(true);
    } catch (error) {
      console.log('🚀', error);
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBasket());
    setBasketState(false);
  }, [basketState]);

  useEffect(() => {
    if (data) {
      setValue('Name', data.name);
      setValue('Surname', data.surname);
      setValue('Email', data.email);
      setValue('Phone', data.phone);
      setValue('Country', data.country);
      setValue('PostalCode', data.postalcode);
    }
  }, [data, basket]);

  const DeleteToBasket = async (id) => {
    try {
      await axios.delete(`https://217.76.63.20:44389/api/basket/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBasketState(true);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="cart-wrapper">
      <div className="container">
        <PageMap title={'Cart'} />
        <h4>Your order</h4>
        <div className="order_items mt-3 ">
          <div
            style={basket.length > 0 ? { display: 'none' } : {}}
            className="mx-auto text-center mt-5">
            <h2>Cart Is Empty</h2>
          </div>
          <TransitionGroup className="items">
            {basket &&
              basket.map((item, index) => (
                <CSSTransition key={item ? item.id : index} timeout={300} classNames="">
                  <div className="item d-flex align-items-center justify-content-between">
                    <div className="item_img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="item_info mx-3">
                      <p>{item.title}</p>
                    </div>
                    <div className="item_size">{SizeSelect()}</div>
                    <div className="item_count">
                      <div className="minus">
                        <button onClick={handleDecrease}>-</button>
                      </div>
                      <input type="text" value={count} readOnly />
                      <div className="plus">
                        <button onClick={handleIncrease}>+</button>
                      </div>
                    </div>
                    <div className="price">
                      <p>{item.price} $</p>
                    </div>
                    <div className="item_delete">
                      <button onClick={() => DeleteToBasket(item.id)}>
                        <img width={25} height={25} src={dltIcon} alt="" />
                      </button>
                    </div>
                  </div>
                </CSSTransition>
              ))}
          </TransitionGroup>
        </div>
        <div className="total_price d-flex justify-content-end mt-3">
          <span>Total Price : </span>
          <p className="mx-3">{basket.reduce((acc, item) => acc + item.price, 0)} $</p>
        </div>
        <div className="checkout " style={basket.length > 0 ? {} : { display: 'none' }}>
          <div className="content">
            <form id="checkoutForm" onSubmit={handleSubmit(submitForm)}>
              <div className="user_info">
                <h5>Checkout</h5>
                <p>Personal Information:</p>
                <div className="info">
                  <input type="text" {...register('Name')} placeholder="Name" />
                  <input type="text" {...register('Surname')} placeholder="Surname" />
                  <input type="email" {...register('Email')} disabled placeholder="Email" />
                  <input type="phone" {...register('Phone')} placeholder="Phone" />
                </div>
                <div className="adress">
                  <p>Delivery address:</p>
                  <input type="text" {...register('Country')} placeholder="City" />
                  <input type="text" {...register('PostalCode')} placeholder="Zip Code" />
                </div>
              </div>
              <div className="checkout_submite">
                <div className="sub_adres">
                  <p>Address:</p> <span>Baku</span>
                </div>
                <br />
                <div className="sub_price">
                  <p>Total Price:</p>{' '}
                  <span>{basket.reduce((acc, item) => acc + item.price, 0)}$</span>
                </div>
                <ButtonSubmit title={'CHECKOUT'} />
                <div className="message">
                  <p>
                    By clicking on the "pay for the order" button, I accept the terms of the public
                    offer and privacy policy
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
