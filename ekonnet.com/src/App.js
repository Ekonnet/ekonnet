import React from 'react'
import {Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import BuyCrypto from './components/BuyCrypto/BuyCrypto';
import OneClickBuy from './components/BuyCrypto/OneClickBuy';
import P2pTradingFees from './components/BuyCrypto/P2pTradingFees';
import FiatDeposite from './components/BuyCrypto/FiatDeposite';
import MarketOverview from './components/Markets/MarketOverview';
import Traders from './components/Traders/Traders';
import Features from './components/Traders/Features';
import MobileApp from './components/Traders/MobileApp';
import Wallets from './components/Traders/Wallets';
import Security from './components/Traders/Security';
import Explore from './components/Explore/Explore';
import Future from  './components/Future/Future';
import SignUp from './components/Login/SignUp';
import SignIn from './components/Login/SignIn';
import Markets from './components/Markets/Markets';
import MarketData from './components/Markets/MarketData';





const App = () => {
  return (
    <>
<Routes>
<HeaderNav/>
<Route path="/" element={<Home />} />
  <Route path="/buycrypto" element={<BuyCrypto/>}>
    <Route path="/one_click_buy" element={<OneClickBuy/>}/>
    <Route path="/p2p_trading_Fees" element={<P2pTradingFees/>}/>
    <Route path="/fiat_deposite" element={<FiatDeposite/>}/>
  </Route>

  <Route path="/Markets" element={<Markets/>}>
    <Route path="/MarketOverview" element={<MarketOverview/>}/>
    <Route path="/MarketData" element={<MarketData/>}/>
  </Route>

  <Route path="/future" element={<Future />} />

  <Route path="/traders" element={<Traders/>}>
    <Route path="/features" element={<Features/>}/>
    <Route path="/mobileApp" element={<MobileApp/>}/>
    <Route path="/wallets" element={<Wallets/>}/>
    <Route path="/security" element={<Security/>}/>
  </Route>

  <Route path="/explore" element={<Explore />} />

  <Route path="/signin" element={<SignIn />} />

  <Route path="/signup" element={<SignUp />} />

</Routes>
    </>
  )
}

export default App
