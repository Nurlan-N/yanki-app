import React, { useState } from 'react';
import ButtonSubmit from '../components/ButtonSubmit';
import collection1 from '../assets/img/newcollection/1.png';
import collection2 from '../assets/img/newcollection/2.png';
import collection3 from '../assets/img/newcollection/3.png';
import category1 from '../assets/img/categoryimg/1.png';
import category2 from '../assets/img/categoryimg/2.png';
import category3 from '../assets/img/categoryimg/3.png';
import category4 from '../assets/img/categoryimg/4.png';

const Home = () => {
  return (
    <main>
      <section className="new-collection">
        <div className="image-row">
          <img src={collection1} alt="" />
          <img src={collection2} alt="" />
          <img src={collection3} alt="" />
          <h3>New Collection</h3>
        </div>
      </section>
      <div className="container">
        <section className="category">
          <div className="row">
            <h3>Category</h3>
            <div className="slider mt-5">
              <div className="slider-item ">
                <a href="">
                  <img src={category1} alt="" />
                  <div className="item-body ">
                    <button>Jackets</button>
                  </div>
                </a>
              </div>
              <div className="slider-item ">
                <a href="">
                  <img src={category2} alt="" />
                  <div className="item-body">
                    <button>Coat</button>
                  </div>
                </a>
              </div>
              <div className="slider-item ">
                <a href="">
                  <img src={category3} alt="" />
                  <div className="item-body">
                    <button>Coat</button>
                  </div>
                </a>
              </div>
              <div className="slider-item ">
                <a href="">
                  <img src={category4} alt="" />
                  <div className="item-body">
                    <button>Fur coats</button>
                  </div>
                </a>
              </div>
              <div className="slider-item ">
                <a href="">
                  <img src={category4} alt="" />
                  <div className="item-body">
                    <button>Fur coats</button>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="subscribe  ">
        <h3>Be The First To Know About New Products</h3>
        <form action="">
          <input className="col-8 mx-auto" type="text" placeholder="Email" />
          <ButtonSubmit title={'Subscribe'} />
          <div className="text">
            <p>
              By clicking on the "Subscribe" button, I agree to the processing of my personal data
              and have read the terms of confidentiality.
            </p>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Home;
