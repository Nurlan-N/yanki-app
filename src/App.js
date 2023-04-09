import Header from './components/Header';
import '../src/scss/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
