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
import Derivatives from '../components/Markets/Derivatives';
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
import Blog from './Blog';
import BuyBitcoin from './BuyBitcoin';
import BuyCardano from './BuyCardano';
import BuyBinance from './BuyBinance';
import BuyTether from './BuyTether';
import SingleBlogPage from './SingleBlogPage';
import Sidebar from '../HelpCenter/Getting Startted/Sidebar';
import SidebarRoot from '../HelpCenter/Getting Startted/SidebarRoot';
import Exchange from './Exchange';
import Papertrading from './PaperTrading/Papertrading';
import Question1 from './PaperTrading/Question1';
import Question2 from './PaperTrading/Question2';
import Question3 from './PaperTrading/Question3';
import Question4 from './PaperTrading/Question4';
import Question5 from './PaperTrading/Question5';
import Question6 from './PaperTrading/Question6';
import Question7 from './PaperTrading/Question7';
import Question8 from './PaperTrading/Question8';
import Question9 from './PaperTrading/Question9';
import Question10 from './PaperTrading/Question10';
import Question11 from './PaperTrading/Question11';
import Question12 from './PaperTrading/Question12';
import Question13 from './PaperTrading/Question13';
import Question14 from './PaperTrading/Question14';
import Question15 from './PaperTrading/Question15';
import Question16 from './PaperTrading/Question16';
import Question17 from './PaperTrading/Question17';
import Question18 from './PaperTrading/Question18';
import Question19 from './PaperTrading/Question19';
import Question20 from './PaperTrading/Question20';
import Question21 from './PaperTrading/Question21';
import WebSocket from './Api/websocket';
import Web1 from './Api/Web1';
import Web2 from './Api/Web2';
import Web3 from './Api/Web3';
import Web4 from './Api/Web4';
import Web5 from './Api/Web5';
import Web6 from './Api/Web6';
import Web7 from './Api/Web7';
import Web8 from './Api/Web8';
import Web9 from './Api/Web9';
import Web10 from './Api/Web10';
import Web11 from './Api/Web11';
import Web12 from './Api/Web12';
import Web13 from './Api/Web13';
import Web14 from './Api/Web14';
import Web15 from './Api/Web15';
import Web16 from './Api/Web16';
import Web17 from './Api/Web17';
import Corporate from './Corporate';





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
       <Route path="/darivatives" element={<Derivatives/>}/> 
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
       <Route path='/blog' element={<Blog/>}/>
       <Route path='/single-blog' element={<SingleBlogPage/>}/>
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
       <Route path='/buy-bitcoin' element={<BuyBitcoin/>}/>
       <Route path='/buy-tether' element={<BuyTether/>}/>
       <Route path='/buy-binance' element={<BuyBinance/>}/>
       <Route path='/buy-cardano' element={<BuyCardano/>}/>
       <Route path='/paper-trading' element={<Papertrading/>}/>
       <Route path='/que1' element={<Question1/>}/>
       <Route path='/que2' element={<Question2/>}/>
       <Route path='/que3' element={<Question3/>}/>
       <Route path='/que4' element={<Question4/>}/>
       <Route path='/que5' element={<Question5/>}/>
       <Route path='/que6' element={<Question6/>}/>
       <Route path='/que7' element={<Question7/>}/>
       <Route path='/que8' element={<Question8/>}/>
       <Route path='/que9' element={<Question9/>}/>
       <Route path='/que10' element={<Question10/>}/>
       <Route path='/que11' element={<Question11/>}/>
       <Route path='/que12' element={<Question12/>}/>
       <Route path='/que13' element={<Question13/>}/>
       <Route path='/que14' element={<Question14/>}/>
       <Route path='/que15' element={<Question15/>}/>
       <Route path='/que16' element={<Question16/>}/>
       <Route path='/que17' element={<Question17/>}/>
       <Route path='/que18' element={<Question18/>}/>
       <Route path='/que19' element={<Question19/>}/>
       <Route path='/que20' element={<Question20/>}/>
       <Route path='/que21' element={<Question21/>}/> 
       <Route path='/web-socket' element={<WebSocket/>}/>
       <Route path='/web1' element={<Web1/>}/>
       <Route path='/web2' element={<Web2/>}/>
       <Route path='/web3' element={<Web3/>}/>
       <Route path='/web4' element={<Web4/>}/>
       <Route path='/web5' element={<Web5/>}/>
       <Route path='/web6' element={<Web6/>}/>
       <Route path='/web7' element={<Web7/>}/>
       <Route path='/web8' element={<Web8/>}/>
       <Route path='/web9' element={<Web9/>}/>
       <Route path='/web10' element={<Web10/>}/>
       <Route path='/web11' element={<Web11/>}/>
       <Route path='/web12' element={<Web12/>}/>
       <Route path='/web13' element={<Web13/>}/>
       <Route path='/web14' element={<Web14/>}/>
       <Route path='/web15' element={<Web15/>}/>
       <Route path='/web16' element={<Web16/>}/>
       <Route path='/web17' element={<Web17/>}/>
       <Route path='/corporate-professional' element={<Corporate/>}/>
       
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
