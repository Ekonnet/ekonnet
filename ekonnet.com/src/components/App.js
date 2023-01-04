import React from 'react';

// import Future from '../components/Future/Future.js';

// import Home from './Home/HomeOld';
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
import GettingStarted from '../HelpCenter/Getting Startted/GettingStarted';

import CookiesPolicy from './Legal and Privacy/CookiesPolicy';
import CookiesPreferences from './Legal and Privacy/CookiesPreferences';
import TokenSpecificTerms from './Legal and Privacy/TokenSpecificTerms';
import GeneralNoticeAndTerms from './Legal and Privacy/GeneralNoticeAndTerms';
import TradingRuleBook from './Legal and Privacy/TradingRulebook';
import Privacy from './Legal and Privacy/Privacy';
import ExchangeTerms from './Legal and Privacy/ExchangeTerms';
import EkonnetPayTerms from './Legal and Privacy/EkonnetPayTerms';
import ContactUs from './Contacts/ContactUs';
import DerivativeTerms from './Legal and Privacy/DerivativeTerms';
import TradingLending from '../HelpCenter/TradingLending/TradingLending';
import Home from './Home/Home';



import Sidebar from '../HelpCenter/Getting Startted/Sidebar';
import SidebarRoot from '../HelpCenter/Getting Startted/SidebarRoot';
import Exchange from './Exchange';
// import WhatIsEkonnet from '../HelpCenter/Getting Startted/WhatIsEkonnet';
// import AcountCreate from '../HelpCenter/Getting Startted/AcountCreate';
// import HowToEarn from '../HelpCenter/Getting Startted/HowToEarn';
// import BeginnersGuide from '../HelpCenter/Getting Startted/BeginnersGuide';
// import HowToUse from '../HelpCenter/Getting Startted/HowToUse';
// import HowToDeposite from '../HelpCenter/Getting Startted/HowToDeposite';
// import HowToWithdrawal from '../HelpCenter/Getting Startted/HowToWithdrawal';






const App = () => {

  return (
    <>
      <Routes>
       {/* <Route path="/" element={<Home/>}/>  */}
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
       <Route path="/sign-up" element={<SignUp/>}/>
       <Route path='/affiliate' element={<Affiliate/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact-us' element={<ContactUs/>}/>
       <Route path='/career' element={<Career/>}/>
       <Route path='/fees' element={<Fees/>}/>
       <Route path='/credit-card' element={<CreditDebitCard/>}/>
       <Route path='/news-letter' element={<NewsLetter/>}/>
       <Route path='/ekonnet-pay' element={<EkonnetPay/>}/>
       <Route path='/staking' element={<Staking/>}/>
       <Route path='/otc' element={<Otc/>}/>
       <Route path='/exchange' element={<Exchange/>}/>
       <Route path='/otc-sell' element={<OtcSell/>}/>
       <Route path='/two-way' element={<TwoWay/>}/>

       <Route path='/help-center' element={<HelpCenter/>}/>
       <Route path='/getting-started' element={<GettingStarted/>}/>
       <Route path='/trading-lending' element={<TradingLending/>}/>
       
       
       <Route path='/general-notice-and-terms' element={<GeneralNoticeAndTerms/>}/>
       <Route path='/ekonnet-pay-terms' element={<EkonnetPayTerms/>}/>
       <Route path='/exchange-terms' element={<ExchangeTerms/>}/>
       <Route path='/derivative-terms' element={<DerivativeTerms/>}/>
       <Route path='/privacy' element={<Privacy/>}/>
       <Route path='/cookies-policy' element={<CookiesPolicy/>}/>
       <Route path='/Cookies-Preferences' element={<CookiesPreferences/>}/>
       <Route path='/token-specific-terms' element={<TokenSpecificTerms/>}/>
       <Route path='/trading-rulebook' element={<TradingRuleBook/>}/>
       <Route path='/' element={<Home/>}/>
       <Route path='/sidebar' element={<Sidebar/>}/>
       <Route path='/sidebar-route' element={<SidebarRoot/>}/>

      

       
     </Routes>
  
  
     {/* <Sidebar>
      <Routes>
       <Route path='/what-is-ekonnet' element={<WhatIsEkonnet/>}/>  
       <Route path='/acount-create' element={<AcountCreate/>}/>
       <Route path='/how-to-earn' element={<HowToEarn/>}/>
       <Route path='/how-to-use' element={<HowToUse/>}/>
       <Route path='/beginners-guide' element={<BeginnersGuide/>}/>
       <Route path='/how-to-deposite' element={<HowToDeposite/>}/>
       <Route path='/how-to-withdrawal' element={<HowToWithdrawal/>}/>
       </Routes>
       </Sidebar> */}
     
    </>
 
  )
}

export default App
