import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import '../src/scss/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages and Components
import Footer from './components/Footer';
import Home from './pages/Home';
import NoteFound from './pages/NotFound';
import Shop from './pages/Shop';
import About from './pages/About';
import New from './pages/New';
import Header from './components/Header';
import DrawerBlock from './components/DrawerBolck/index';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';

function App() {
  const [cartDisplay, setCartDisplay] = useState(false);

  return (
    <div className="wrapper">
      <DrawerBlock cartDisplay={cartDisplay} onClose={() => setCartDisplay(false)} />
      <div className={cartDisplay ? "d-none" : ""}>
        <Header onClickCart={() => setCartDisplay(!cartDisplay)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/wishlist' element={<Wishlist/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/new" element={<New />} />
          <Route path="*" element={<NoteFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
