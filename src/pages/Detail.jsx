import React from 'react';
import PageMap from '../components/PageMap';
import ButtonSubmit from '../components/ButtonSubmit';
import mainImage from '../assets/img/detail/MainImage.png';
import m1 from '../assets/img/detail/1.png';
import m2 from '../assets/img/detail/2.png';
import m3 from '../assets/img/detail/3.png';
import m4 from '../assets/img/detail/4.png';
import m5 from '../assets/img/detail/5.png';
import heart from '../assets/img/icon/wishlist_gold.png';

const Detail = () => {
  return (
    <div className="detail_wrapper">
      <div className="container">
        <div className="row">
        <PageMap title={'Detail'} />
          <div className="detail_content">
            <div className="pr_image_block d-flex ">
              <div className="pr_images d-flex">
                <img src={m1} alt="Image" />
                <img src={m2} alt="Image" />
                <img src={m3} alt="Image" />
                <img src={m4} alt="Image" />
                <img src={m5} alt="Image" />
              </div>
              <div className="main_image">
                <img src={mainImage} alt="" />
              </div>
            </div>
            <div className="product_info_block">
              <div className="pr_info">
                <h5>Кремовое пальто</h5>
                <p>2300$</p>
              </div>
              <div className="cart_and_wishlist">
                <div className="cart">
                  <ButtonSubmit title={'ADD TO CART'} />
                </div>
                <div className="wishlist">
                    <button ><img width={15} height={14} src={heart} alt="Heart" /> WISHLIST</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
