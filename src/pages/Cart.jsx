import React from 'react';
import PageMap from '../components/PageMap/index';
import image from '../assets/img/categoryimg/1.png';
import dltIcon from '../assets/img/icon/delete.png';
import ButtonSubmit from '../components/ButtonSubmit';

import Select from 'react-select';

const sizeOptions = [
  { value: 'xl', label: 'XL' },
  { value: 'xxl', label: 'XXL' },
  { value: 'ms', label: 'MS' },
];
const SizeSelect = () => (
  <Select className="size-select" options={sizeOptions} placeholder="Size.." />
);
const Cart = () => {
  return (
    <div className="cart-wrapper">
      <div className="container">
        <PageMap title={'Cart'} />
        <h4>Your order</h4>
        <div className="order_items mt-3 ">
          <div className="item d-flex align-items-center justify-content-between">
            <div className="item_img">
              <img src="Users\MSI\Desktop\yanki-app\src\assets\img\categoryimg\1.png" alt="" />
            </div>
            <div className="item_info mx-3">
              <p>Кремовое пальто</p>
            </div>
            <div className="item_size">{SizeSelect()}</div>
            <div className="item_count">
              <button>-</button>
              <input type="text" defaultValue={1} />
              <button>+</button>
            </div>
            <div className="price">
              <p>9450 $</p>
            </div>
            <div className="item_delete">
              <button>
                <img width={25} height={25} src={dltIcon} alt="" />
              </button>
            </div>
          </div>
          <div className="item d-flex align-items-center justify-content-between">
            <div className="item_img">
              <img src={image} alt="" />
            </div>
            <div className="item_info mx-3">
              <p>Кремовое пальто</p>
            </div>
            <div className="item_size">{SizeSelect()}</div>
            <div className="item_count">
              <button>-</button>
              <input type="text" defaultValue={1} />
              <button>+</button>
            </div>
            <div className="price">
              <p>9450 $</p>
            </div>
            <div className="item_delete">
              <button>
                <img width={25} height={25} src={dltIcon} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="total_price d-flex justify-content-end mt-3">
          <span>Total Price : </span>
          <p className="mx-3">3000 $</p>
        </div>
        <div className="checkout">
          <div className="content">
            <form action="">
              <h5>Checkout</h5>
              <p>Personal Information:</p>
              <div className="info">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Surname" />
                <input type="email" placeholder="Email" />
                <input type="phone" placeholder="Phone" />
              </div>
              <div className="adress">
                <p>Delivery address:</p>
                <input type="text" placeholder="City" />
                <input type="text" placeholder="Zip Code" />
              </div>
            </form>
            <div className="checkout_submite">
              <div className="sub_adres">
                <p>Address:</p> <span>Baku</span>
              </div>
              <br />
              <div className="sub_price">
                <p>Total Price:</p> <span>15000$</span>
              </div>
              <ButtonSubmit title={'CHECKOUT'} />
              <div className="message">
                <p>
                  By clicking on the "pay for the order" button, I accept the terms of the public
                  offer and privacy policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
