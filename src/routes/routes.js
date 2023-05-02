import Dashboard from '../components/admin/Dashboard';
import Test from '../components/admin/Test';

const routes = [
  { path: '/admin', exact: true, name: 'Admin' },
  { path: '/admin/dashboard', exact: true, name: 'Dashboard', element: Dashboard },
  { path: '/admin/test', exact: true, name: 'Test', element: Test },
];

export default routes;
