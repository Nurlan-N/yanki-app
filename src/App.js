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
import New from './pages/New';
import Header from './components/Header';
import DrawerBlock from './components/DrawerBolck/index';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import axios from 'axios';

function App() {
  const [cartDisplay, setCartDisplay] = useState(false);
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
        <Header onClickCart={() => setCartDisplay(!cartDisplay)} />
        <Routes>
          <Route path="/" element={<Home category={category} />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
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
