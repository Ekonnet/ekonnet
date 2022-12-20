import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import HeaderNav from './components/HeaderNav';
import "swiper/css/bundle";
import Footer from './components/Footer';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
   <HeaderNav />
   <App/>
   <Footer/>
   </BrowserRouter>


);


