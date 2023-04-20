import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../src/scss/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages and Components
import Footer from './components/Footer';
import Home from './pages/Home';
import NoteFound from './pages/NotFound';
import Shop from './pages/Shop';
import About from './pages/About';
import Header from './components/Header';
import DrawerBlock from './components/DrawerBolck/index';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Authorization from './components/AuthorizationBlock';
import RegisterBlock from './components/RegisterBlock';
import ProfilePopUp from './components/ProfilePop-Up';

import axios from 'axios';
import Detail from './pages/Detail';

function App() {
  const [cartDisplay, setCartDisplay] = useState(false);
  const [authorizationDisplay, setAuthorizationDisplay] = useState(false);
  const [registerDisplay, setRegisterDisplay] = useState(false);
  const [popUpDisplay, setPopUpDisplay] = useState(false);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get('https://localhost:44389/api/category');
        setCategory(data);
      } catch (error) {
        alert('Datada sehv');
      }
    }
    fetchData();
  }, []);

  return (
    <div className="wrapper">
      <DrawerBlock cartDisplay={cartDisplay} onClose={() => setCartDisplay(false)} />
      <div className={cartDisplay ? 'd-none' : ''}>
        <Header
          onClickCart={() => setCartDisplay(!cartDisplay)}
          onClickProfile={() => setPopUpDisplay(!popUpDisplay)}
        />
        <Routes>
          <Route path="/" element={<Home category={category} />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/new" element={<Home category={category} />} />
          <Route path="*" element={<NoteFound />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
        <ProfilePopUp
          display={popUpDisplay}
          onCliclkSignIn={() => setAuthorizationDisplay(!authorizationDisplay)}
          onClickRegiter={() => setRegisterDisplay(!registerDisplay)}

        />
        <Authorization
          display={authorizationDisplay}
          onClose={() => setAuthorizationDisplay(false)}
        />
        <RegisterBlock
          display={registerDisplay}
          onClose={() => setRegisterDisplay(false)}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
