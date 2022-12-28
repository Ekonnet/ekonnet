import React from 'react';

// import Future from '../components/Future/Future.js';

import Home from './Home/Home';
import OneClickBuy from './BuyCrypto/OneClickBuy';
import OneClickSell from './BuyCrypto/OneClickSell';
import P2pTradingFees from './BuyCrypto/P2pTradingFees';
import P2pTradingFeesSell from './BuyCrypto/P2pTradingFeesSell';
import FiatDeposite from './BuyCrypto/FiatDeposite';
import MarketOverview from './Markets/MarketOverview';
import Traders from './Traders/Traders';
import Features from './Traders/Features';
import MobileApp from './Traders/MobileApp';
import Wallets from './Traders/Wallets';
import Security from './Traders/Security';
import Explore from './Explore/Explore';
import Future from  './Future/Future';
import SignUp from '../components/AcountLogin/SignUp';
import SignIn from '../components/AcountLogin/SignIn';
import Spot from '../components/Markets/Spot';
import MarketData from './Markets/MarketData';
import Affiliate from './Affiliate';
import About from './About';
import Fees from './Fees';
import NewsLetter from './NewsLetter';
import Career from './Career';
import EkonnetPay from './EkonnetPay';
import Staking from './Staking';
import {Route,Routes} from "react-router-dom";
import Derivatives from './Markets/Derivatives';
import CreditDebitCard from './CreditDebitCard';
import Otc from './Otc';
import OtcSell from './OtcSell';
import TwoWay from './TwoWay';
import HelpCenter from '../HelpCenter/HelpCenter';


const App = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>}/> 
       <Route path="/one-click-buy" element={<OneClickBuy/>}/> 
       <Route path="/spot" element={<Spot/>}/> 
       <Route path="/derivatives" element={<Derivatives/>}/> 
       <Route path="/one-click-sell" element={<OneClickSell/>}/> 
       <Route path="/p2p-trading-Fees" element={<P2pTradingFees/>}/>
       <Route path="/fiat-deposite" element={<FiatDeposite/>}/>
       <Route path="/market-overview" element={<MarketOverview/>}/>
       <Route path="/traders" element={<Traders/>}/>
       <Route path="/features" element={<Features/>}/>
       <Route path="/mobile-app" element={<MobileApp/>}/>
       <Route path="/wallets" element={<Wallets/>}/>
       <Route path="/security" element={<Security/>}/>
       <Route path="/explore" element={<Explore/>}/>
       <Route path="/future" element={<Future/>}/>
       <Route path="/signup" element={<SignUp/>}/>
       <Route path="/signin" element={<SignIn/>}/>
       <Route path="/market-data" element={<MarketData/>}/>
       <Route path="/P2p-trading-fees-sell" element={<P2pTradingFeesSell/>}/>
       <Route path="/sign-in" element={<SignIn/>}/>
       <Route path='/affiliate' element={<Affiliate/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/career' element={<Career/>}/>
       <Route path='/fees' element={<Fees/>}/>
       <Route path='/credit-card' element={<CreditDebitCard/>}/>
       <Route path='/news-letter' element={<NewsLetter/>}/>
       <Route path='/ekonnet-pay' element={<EkonnetPay/>}/>
       <Route path='/staking' element={<Staking/>}/>
       <Route path='/otc' element={<Otc/>}/>
       <Route path='/otc-sell' element={<OtcSell/>}/>
       <Route path='/two-way' element={<TwoWay/>}/>
       <Route path='/help-center' element={<HelpCenter/>}/>
     </Routes>
    </>
 
  )
}

export default App
