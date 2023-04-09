import { Route, Routes } from 'react-router-dom';
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


function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/new' element={<New/>}/>
        <Route path='*' element={<NoteFound/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
