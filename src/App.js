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
import ProductsBlock from './components/admin/ProductsBlock';
import ProductUpdate from './components/admin/ProductsBlock/Update';
import ProductDetail from './components/admin/ProductsBlock/Detail';
import ProductCreate from './components/admin/ProductsBlock/Create';
import CategoriesCreate from './components/admin/CategoriesBlock/Create';
import CategoriesUpdate from './components/admin/CategoriesBlock/Update';
import CategoriesDetail from './components/admin/CategoriesBlock/Detail';
import CategoriesBlock from './components/admin/CategoriesBlock';
import OrdersBlock from './components/admin/OrdersBlock';
import UsersBlock from './components/admin/UsersBlock';
import SettingsBlock from './components/admin/SettingsBlock';
import routes from './routes/routes';
import Cookies from 'js-cookie';

function App() {
  const { data } = useGetUserDetailsQuery('userDetails', { pollingInterval: 900000 });
  const [category, setCategory] = useState([]);
  const [role, setRole] = useState('Member');

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
        Cookies.set('category', JSON.stringify(data));
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
            <Route path="products/update" element={<ProductUpdate />} />
            <Route path="products/detail" element={<ProductDetail />} />
            <Route path="products/create" element={<ProductCreate />} />
            <Route path="categories/create" element={<CategoriesCreate />} />
            <Route path="categories/update" element={<CategoriesUpdate />} />
            <Route path="categories/detail" element={<CategoriesDetail />} />
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
