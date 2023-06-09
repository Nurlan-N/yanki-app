import React from 'react';
import PageMap from '../../../components/client/PageMap';
import img from '../../../assets/img/about.jpg';
import ButtonSubmit from '../../../components/client/ButtonSubmit';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSubscribe } from '../../../redux/function/authAction';

const About = () => {
  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((state) => state.auth);
  const [email, setEmail] = useState(null);

  const submitSubscribe = async () => {
    if (email === null) return;
    dispatch(userSubscribe(email));
  };
  return (
    <div className="about_wrapper">
      <div className="container">
        <div className="row">
          <PageMap title={'About'} />
          <div className="content d-flex">
            <div className="main_img">
              <img src={img} walt="" alt="Main Image" />
            </div>
            <div className="text mx-5">
              <h2>WELCOME TO YANKI</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque maiores eligendi sed
                a, eos tempora eius officiis earum cupiditate ad aspernatur perferendis quas magni
                pariatur. Eos cupiditate quasi nesciunt blanditiis. Consectetur incidunt quod nihil
                atque reiciendis. Tempora repellat nobis veritatis deleniti ratione, illum earum et
                repellendus voluptate accusamus? Porro fugiat sed ea voluptates temporibus adipisci
                excepturi sapiente ab amet vel. Voluptatem quam quod esse! Aliquam facere suscipit
                laudantium nobis et cum? Debitis, nostrum! Laborum quibusdam sit inventore soluta
                culpa dolorum tempora aliquam? Distinctio facere minima officia delectus vero
                accusantium unde. Rerum aliquam, laudantium ab assumenda rem maiores consectetur ad!
                Vitae, voluptatem? Nemo aut et quibusdam reprehenderit dolores distinctio aspernatur
                dolorum adipisci? Ut expedita nesciunt atque, et maiores vel iste magnam!
              </p>
            </div>
          </div>
          <section className="subscribe  mt-5">
            <h3>Be The First To Know About New Products</h3>
            <div className="sub_form d-flex flex-wrap text-center col-5">
              <span
                style={message ? { display: 'none' } : {}}
                className=" col-lg-12 text text-danger">
                {error}
              </span>
              <span
                style={error ? { display: 'none' } : {}}
                className="text text-success col-lg-12">
                {message}
              </span>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="col-7 col-lg-12 mx-auto"
                type="email"
                placeholder="Email"
              />
              <div
                style={loading ? { cursor: 'none' } : {}}
                className="col-lg-12 col-7 text-center mx-auto"
                onClick={() => submitSubscribe()}>
                <ButtonSubmit title={'Subscribe'} />
              </div>
            </div>
            <div className="text col-12">
              <p className="col-12">
                By clicking on the "Subscribe" button, I agree to the processing of my personal data
                and have read the terms of confidentiality.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
