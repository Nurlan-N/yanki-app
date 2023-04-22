import React, { useState } from 'react';
import PageMap from '../components/PageMap';
import Submit from '../components/ButtonSubmit';
import row from '../assets/img/icon/down.png';
import prImage from '../assets/img/product/min-1.svg';
import { logout } from '../redux/slices/authSlice ';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const MyAccount = () => {
  const [buttonColor, setButtonColor] = useState('');
  const [selectButton, setSellectButton] = useState(1);
  const [showItems, setShowItems] = useState(false);
  const dispatch = useDispatch();
  const { userToken } = useSelector((state) => state.auth);


  const showOrderItems = () => {
    setShowItems(!showItems);
  };

  const handleButtonClick = (e) => {
    setSellectButton(e);
    setButtonColor('#CCA88A');
  };
  return (
    <div className="account_wrapper" style={userToken ? {} : {display: 'none'}}>
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
              style={selectButton === 2 ? { backgroundColor: buttonColor } : null}
              onClick={() => handleButtonClick(2)}>
              <button>Personal Data</button>
            </div>
            <div
              className="menu_item"
              style={selectButton === 3 ? { backgroundColor: buttonColor } : null}
              onClick={() => handleButtonClick(3)}>
              <Link to='/' onClick={() => dispatch(logout())}>Exit</Link>
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
          <form action="">
            <div className="personal_data">
              <h5>Personal Information:</h5>
              <div className="personal_data_input d-flex justify-content-between">
                <input type="text" defaultValue={"Nurlan"} />
                <input type="text" defaultValue={"Nazarov"}/>
                <input type="text" defaultValue={"Nazarov.Nurlan@gmail.com"}/>
                <input type="text" defaultValue={"+99455-582-86-99"}/>
              </div>
            </div>
            <h5>Delivery Address:</h5>
            <div className="addres_data d-flex justify-content-between">
              <input type="text"  defaultValue={"Sumqayit"}/>
              <input type="text" defaultValue={"5000"}/>
            </div>
            <Submit title={'UPDATE INFO'} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
