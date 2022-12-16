import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import HeaderNav from './components/HeaderNav';
import "swiper/css/bundle";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
   <HeaderNav />
   <App/>
   </BrowserRouter>


);


