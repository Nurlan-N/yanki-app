import React, { Children, cloneElement, useEffect, useState } from 'react';
import ButtonSubmit from '../../../components/client/ButtonSubmit';
import collection1 from '../../../assets/img/newcollection/1.png';
import collection2 from '../../../assets/img/newcollection/2.png';
import collection3 from '../../../assets/img/newcollection/3.png';
import arrow from '../../../assets/img/icon/arrow.png';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../../../redux/slices/filterSlice';
import axios from 'axios';

const page_width = 26;

const Home = ({ children, category }) => {
  const dispatch = useDispatch();

  const [offset, setOffset] = useState(0);
  const [pages, setPages] = useState([]);
  const [email, setEmail] = useState(null);
  const [subscribeRes, setSubscribeRes] = useState('');
  const [subscribeError, setSubscribeError] = useState('');
  const CategoryClick = (e) => {
    dispatch(setCategoryId(e));
  };
  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + page_width;
      return Math.min(newOffset, 0);
    });
  };
  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - page_width;
      const maxOffset = -(26 * (category.length - 4));
      return Math.max(newOffset, maxOffset);
    });
  };

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: '100%',
            minWidth: `${page_width}%`,
            maxWidth: `${page_width}%`,
          },
        });
      }),
    );
  }, []);

  const submitSubscribe = async () => {
    if (email === null) return;
    try {
      const { data } = await axios.post(
        `https://localhost:44389/api/Subscribe/create?email=${email}`,
      );
      setSubscribeRes(data);
    } catch (error) {
      setSubscribeError(error.response.data);
    }
  };
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
            <div className="arrow right_arrow" onClick={handleRightArrowClick}>
              <img src={arrow} alt="" />
            </div>
            <div className="window">
              <div className="slider mt-5" style={{ transform: `translateX(${offset}%)` }}>
                {category &&
                  category.map((obj) => (
                    <div key={obj.id} className="slider-item ">
                      <Link onClick={() => CategoryClick(obj.id)} to={`/shop`}>
                        <img src={obj.image} alt="" />
                        <div className="item-body ">
                          <button>{obj.name}</button>
                        </div>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
            <div className="arrow left_arrow" onClick={handleLeftArrowClick}>
              <img className="r_arrow_img" src={arrow} alt="" />
            </div>
          </div>
        </section>
      </div>

      <section className="subscribe  ">
        <h3>Be The First To Know About New Products</h3>
        <div className="sub_form d-flex flex-wrap text-center col-5">
        <span className='text text-danger'>{subscribeError}</span>
        <span className='text text-success'>{subscribeRes}</span>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="col-7 col-lg-12 mx-auto"
          type="email"
          placeholder="Email"
        />
        <div className='col-lg-12 col-7 text-center mx-auto' onClick={() => submitSubscribe()}>
          <ButtonSubmit title={'Subscribe'} />
        </div>
        </div>
        <div className="text col-12">
          <p className='col-12'>
            By clicking on the "Subscribe" button, I agree to the processing of my personal data and
            have read the terms of confidentiality.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
