import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import '../../assets/admin/assets/css/style.css';
import '../../assets/admin/assets/vendor/apexcharts/apexcharts.min.js';
import '../../assets/admin/assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
import '../../assets/admin/assets/vendor/chart.js/chart.umd.js';
import '../../assets/admin/assets/vendor/echarts/echarts.min.js';
import '../../assets/admin/assets/vendor/quill/quill.min.js';
import '../../assets/admin/assets/vendor/simple-datatables/simple-datatables.js';
import '../../assets/admin/assets/vendor/tinymce/tinymce.min.js';
import '../../assets/admin/assets/vendor/php-email-form/validate.js';
import '../../assets/admin/assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../assets/admin/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../../assets/admin/assets/vendor/boxicons/css/boxicons.min.css';
import '../../assets/admin/assets/vendor/quill/quill.snow.css';
import '../../assets/admin/assets/vendor/quill/quill.bubble.css';
import '../../assets/admin/assets/vendor/remixicon/remixicon.css';
import '../../assets/admin/assets/vendor/simple-datatables/style.css';
import Dashboard from '../../components/admin/Dashboard';

import routes from '../../routes/routes';
import { BrowserRouter, Link, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Test from '../../components/admin/Test';
const MasterLayout = () => {
  console.log(routes);
  return (
    <div>
      <header>
        <Header />
        <Sidebar/>
      </header>

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MasterLayout;
