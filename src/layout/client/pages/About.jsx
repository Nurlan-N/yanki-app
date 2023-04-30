import React from 'react';
import PageMap from '../../../components/PageMap';
import img from '../../../assets/img/about.jpg';
import ButtonSubmit from '../../../components/ButtonSubmit';

const About = () => {
  return (
    <div className="about_wrapper">
      <div className="container">
        <div className="row">
          <PageMap title={'About'} />
          <div className="content d-flex">
            <div className="main_img">
              <img src={img} walt="" />
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
          <section className="subscribe mt-5 ">
            <h3>Be the first to know about new products</h3>
            <form action="">
              <input className="col-8 mx-auto" type="text" placeholder="Email" />
              <ButtonSubmit title={'Subscribe'} />
              <div className="text">
                <p>
                  By clicking on the "Subscribe" button, I agree to the processing of my personal
                  data and have read the terms of confidentiality.
                </p>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
