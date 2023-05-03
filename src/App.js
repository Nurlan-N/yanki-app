import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../src/scss/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages and Components
import Home from './layout/client/pages/Home';
import axios from 'axios';
import { useGetUserDetailsQuery } from './redux/function/authService';
import MasterLayout from './layout/admin/MasterLayout';
import Home2 from './layout/client/Home2';
import Dashboard from './components/admin/Dashboard';
import ClientLayout from './layout/client/ClientLayout';
import ProductsBlock from './components/admin/ProductsBlock'
import CategoriesBlock from './components/admin/CategoriesBlock'
import OrdersBlock from './components/admin/OrdersBlock'
import UsersBlock from './components/admin/UsersBlock'
import SettingsBlock from './components/admin/SettingsBlock'
import routes from './routes/routes';

function App() {
  const { data } = useGetUserDetailsQuery('userDetails', { pollingInterval: 900000 });
  const [category, setCategory] = useState([]);
  console.log('🚀 ~ file: App.js:27 ~ App ~ category:', category);
  const [role, setRole] = useState('Member');
  console.log('🚀 ~ file: App.js:21 ~ App ~ role:', role);

  useEffect(() => {
    if (data != undefined) {
      setRole(data.role);
    }
  }, [data]);
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
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          {routes.map((route, idx) => {
            return route.element && <Route key={idx} path={route.path} element={route.element} />;
          })}
          <Route index element={<Home category={category} />} />
        </Route>
        {role != 'Member' ? (
          <Route path="/admin" element={<MasterLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<ProductsBlock />} /> 
            <Route path="categories" element={<CategoriesBlock />} /> 
            <Route path="orders" element={<OrdersBlock />} /> 
            <Route path="users" element={<UsersBlock />} /> 
            <Route path="settings" element={<SettingsBlock />} /> 
            <Route path="online" element={<Home2 />} /> 
          </Route>
        ) : (
          ''
        )}
      </Routes>
    </div>
  );
}

export default App;
