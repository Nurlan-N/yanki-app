import React from 'react';
import Header from '../../components/admin/Header';
import Sidebar from '../../components/admin/Sidebar';
import Footer from '../../components/admin/Footer';
import '../../assets/admin/assets/css/style.css';
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

import { Outlet } from 'react-router-dom';
const MasterLayout = () => {
  return (
    <div>
      <header>
        <Header />
        <Sidebar />
      </header>

      <main id="main" className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MasterLayout;
