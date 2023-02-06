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
import Top from './components/Traders/Top';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter basename={'/ekonnet'}>
   <Top />
   <HeaderNav />
   
   <App/>
   <Footer/>
   </BrowserRouter>


);


