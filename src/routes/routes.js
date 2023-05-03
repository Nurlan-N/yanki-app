import About from "../layout/client/pages/About";
import Cart from "../layout/client/pages/Cart";
import Shop from "../layout/client/pages/Shop";
import Wishlist from "../layout/client/pages/Wishlist";
import NoteFound from "../layout/client/pages/NotFound";
import Detail from "../layout/client/pages/Detail";
import MyAccount from "../layout/client/pages/MyAccount";
import Home from "../layout/client/pages/Home";


const routes =  [
  { path: 'wishlist', element:<Wishlist/>},
  { path: 'cart',  element: <Cart/> },
  { path: 'shop', element: <Shop/> },
  { path: 'about', element: <About/> },
  { path: '*', element: <NoteFound/> },
  { path: 'detail', element: <Detail/> },
  { path: 'myaccount', element: <MyAccount/> },
];

export default routes;
