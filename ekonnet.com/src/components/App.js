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
import BuyTether from './BuyTether';
import BuyGold from './BuyGold';
import BuyShiba from './BuyShiba';
import BuyXrp from './BuyXrp';
import BuySilver from './BuySilver';
import BuyEthereum from './BuyEthereum';

import SingleBlogPage from './SingleBlogPage';
import Sidebar from '../HelpCenter/Getting Startted/Sidebar';
import SidebarRoot from '../HelpCenter/Getting Startted/SidebarRoot';
import Exchange from './Exchange';
// import Papertrading from './PaperTrading/Papertrading';
// import Question1 from './PaperTrading/Question1';
// import Question2 from './PaperTrading/Question2';
// import Question3 from './PaperTrading/Question3';
// import Question4 from './PaperTrading/Question4';
// import Question5 from './PaperTrading/Question5';
// import Question6 from './PaperTrading/Question6';
// import Question7 from './PaperTrading/Question7';
// import Question8 from './PaperTrading/Question8';
// import Question9 from './PaperTrading/Question9';
// import Question10 from './PaperTrading/Question10';
// import Question11 from './PaperTrading/Question11';
// import Question12 from './PaperTrading/Question12';
// import Question13 from './PaperTrading/Question13';
// import Question14 from './PaperTrading/Question14';
// import Question15 from './PaperTrading/Question15';
// import Question16 from './PaperTrading/Question16';
// import Question17 from './PaperTrading/Question17';
// import Question18 from './PaperTrading/Question18';
// import Question19 from './PaperTrading/Question19';
// import Question20 from './PaperTrading/Question20';
// import Question21 from './PaperTrading/Question21';
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
import Bugbounty from './Bugbounty';
import Terminal from './Terminal';
import Terminal1 from './Terminal/Terminal1';
import Terminal2 from './Terminal/Terminal2';
import Terminal3 from './Terminal/Terminal3';
import Terminal4 from './Terminal/Terminal4';
import Terminal5 from './Terminal/Terminal5';
import Terminal6 from './Terminal/Terminal6';
import Terminal7 from './Terminal/Terminal7';
import Terminal8 from './Terminal/Terminal8';
import Terminal9 from './Terminal/Terminal9';
import Terminal10 from './Terminal/Terminal10';
import Terminal11 from './Terminal/Terminal11';
import Terminal12 from './Terminal/Terminal12';
import Terminal13 from './Terminal/Terminal13';
import Terminal14 from './Terminal/Terminal14';
import Terminalpage from './Terminal/Terminalpage';
import TellFriend from './TellFriend';
import Best from './Best';
import Marginfunding from './Marginfunding';
import Margintrades from './Margintrades';
import Exchangetrades from './Exchangetrades';
import MarketOrder from './MultiTradeOrder/MarketOrder';
import BookOrder from './MultiTradeOrder/BookOrder';
import FillOrder from './MultiTradeOrder/FillOrder';
import ImmediateOrder from './MultiTradeOrder/ImmediateOrder';
import LimitOrder from './MultiTradeOrder/LimitOrder';
import ProOrder from './MultiTradeOrder/ProOrder';
import StopLimitOrder from './MultiTradeOrder/StopLimitOrder';
import StopOrder from './MultiTradeOrder/StopOrder';
import TrailingOrder from './MultiTradeOrder/TrailingOrder';
import UserDashboardHome from '../User_Dashboard/UserDashboardHome';
import UserDerivativesHome from '../User_Dashboard/UserDerivativesHome';
import UserFundingHome from '../User_Dashboard/UserFundingHome';
import UserLendingHome from '../User_Dashboard/UserLendingHome';
import UserOtcHome from '../User_Dashboard/UserOtcHome';
import UserLendingProductHome from '../User_Dashboard/UserLendingProductHome';
import UserAccount from '../User_Dashboard/UserAccount';
import UserSubAccount from '../User_Dashboard/UserSubAccount';
import UserSecurityAccount from '../User_Dashboard/UserSecurityAccount';
import UserAddressBook from '../User_Dashboard/UserAddressBook';
import UserDateAndTime from '../User_Dashboard/UserDateAndTime';
import UserFees from '../User_Dashboard/UserFees';
import UserFunding from '../User_Dashboard/UserFunding';
import UserAccountInfo from '../User_Dashboard/UserAccountInfo';
import UserNotification from '../User_Dashboard/UserNotification';
import UserEmail from '../User_Dashboard/UserEmail';
import UserSoundAlert from '../User_Dashboard/UserSoundAlert';
import UserInterface from '../User_Dashboard/UserInterface';
import UserLayout from '../User_Dashboard/UserLayout';
import UserTickers from '../User_Dashboard/UserTickers';
import UserOrderBook from '../User_Dashboard/UserOrderBook';
import UserTheme from '../User_Dashboard/UserTheme';
import UserSecurity from '../User_Dashboard/UserSecurity';
import UserApi from '../User_Dashboard/UserApi';
import UserCreateNewKey from '../User_Dashboard/UserCreateNewKey';
import UserMyApiKey from '../User_Dashboard/UserMyApiKey';
import UserAffiliate from '../User_Dashboard/UserAffiliate';
import FAQ from './FAQ';
import TokenDeposite from './TokenDeposite';
import TokenWithdrawals from './TokenWithdrawals';
import BankWires from './BankWires';
import AccountAccess from './AccountAccess';
import AccountSetting from './AccountSetting';
import Verification from './Verification';
import TradingAndFunding from './TradingAndFunding';
import ApplicationProgrammingInterface from './ApplicationProgrammingInterface';
import MobileApplication from './MobileApplication';
import BugReporting from './BugReporting';
import SecurityConcern from './SecurityConcern';
import Partnership from './Partnership';
import OtherIssues from './OtherIssues';
import ForksAndAirdrops from './ForksAndAirdrops';
import Captcha from './Captcha';
import AccountAccessess from './Account/AccountAccessess';
import LostAccess from './Account/LostAccess';
import ResetPassword from './Account/ResetPassword';
import Token from './Account/Token';
import Verfications from './Account/Verfications';
import Verification1 from './Account/Verification1';
import Verification2 from './Account/Verification2';
import Verification3 from './Account/Verification3';
import Verification4 from './Account/Verification4';
import Verification5 from './Account/Verification5';
import Verification6 from './Account/Verification6';
import Report from './Account/Report';
import Report1 from './Account/Report1';
import Report2 from './Account/Report2';
import Report3 from './Account/Report3';
import Report4 from './Account/Report4';
import Report5 from './Account/Report5';
import Report6 from './Account/Report6';
import Report7 from './Account/Report7';
import Report8 from './Account/Report8';
import Trading from './Account/Trading';
import Trading1 from './Account/Trading1';
import Trading2 from './Account/Trading2';
import Trading3 from './Account/Trading3';
import Trading4 from './Account/Trading4';
import Trading5 from './Account/Trading5';
import Trading6 from './Account/Trading6';
import Trading7 from './Account/Trading7';
import Trading8 from './Account/Trading8';
import Trading9 from './Account/Trading9';
import Trading10 from './Account/Trading10';
import Trading11 from './Account/Trading11';
import Trading13 from './Account/Trading13';
import Trading12 from './Account/Trading12';
import Trading14 from './Account/Trading14';
import Trading15 from './Account/Trading15';
import Trading16 from './Account/Trading16';
import Trading17 from './Account/Trading17';
import Trading18 from './Account/Trading18';
import Trading19 from './Account/Trading19';
import Trading20 from './Account/Trading20';
import Trading21 from './Account/Trading21';
import Margin from './Account/Margin';
import Margin1 from './Account/Margin1';
import Margin2 from './Account/Margin2';
import Margin3 from './Account/Margin3';
import Margin4 from './Account/Margin4';
import Margin5 from './Account/Margin5';
import Margin6 from './Account/Margin6';
import Margin7 from './Account/Margin7';
import Margin8 from './Account/Margin8';
import Margin9 from './Account/Margin9';
import Margin10 from './Account/Margin10';
import Margin11 from './Account/Margin11';
import Margin12 from './Account/Margin12';
import Derivative from './Account/Derivative';
import Derivative1 from './Account/Derivative1';
import Derivative2 from './Account/Derivative2';
import Derivative3 from './Account/Derivative3';
import Derivative4 from './Account/Derivative4';
import Fee from './Account/Fee';
import Fee1 from './Account/Fee1';
import Fee2 from './Account/Fee2';
import Fee3 from './Account/Fee3';
import Fee4 from './Account/Fee4';
import Honey from './Account/Honey';
import Honey1 from './Account/Honey1';
import Honey2 from './Account/Honey2';
import Depos from './Account/Depos';
import Secure from './Account/Secure';
import Order from './Account/Order';
import Lend from './Account/Lend';
import Mob from './Account/Mob';
import Currencies from './Account/Currencies';
import Resource from './Account/Resource';
import ForgetPassword from './AcountLogin/ForgetPassword';
import Coin from '../components/Home/routes/Coin'




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
       <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
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
       <Route path="/wallet" element={<Wallets/>}/>
       <Route path="/security-protection" element={<Security/>}/>
       <Route path="/explore" element={<Explore/>}/>
       <Route path="/future" element={<Future/>}/>
       <Route path="/signup" element={<SignUp/>}/>
       <Route path="/signin" element={<SignIn/>}/>
       <Route path="/market-data" element={<MarketData/>}/>
       <Route path="/P2p-trading-fees-sell" element={<P2pTradingFeesSell/>}/>
       <Route path="/sign-in" element={<SignIn/>}/>
       <Route path="/sign-up" element={<SignUp/>}/>
       <Route path='/affiliate' element={<Affiliate/>}/>
       <Route path='/about-us' element={<About/>}/>
       <Route path='/contact-us' element={<ContactUs/>}/>
       <Route path='/career' element={<Career/>}/>
       <Route path='/fees' element={<Fees/>}/>
       <Route path='/credit-debit-card' element={<CreditDebitCard/>}/>
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
       <Route path='/how-to-buy-bitcoin' element={<BuyBitcoin/>}/>
       <Route path='/how-to-buy-tether' element={<BuyTether/>}/>
       <Route path='/how-to-buy-ethereum' element={<BuyEthereum/>}/>
       <Route path='/how-to-buy-gold' element={<BuyGold/>}/>
       <Route path='/how-to-buy-shiba-inu' element={<BuyShiba/>}/>
       <Route path='/how-to-buy-silver' element={<BuySilver/>}/>
       <Route path='/how-to-buy-xrp' element={<BuyXrp/>}/>
       {/* <Route path='/paper-trading' element={<Papertrading/>}/>
       <Route path='/Currency-Switch-Tool-on-Ekonnet' element={<Question1/>}/>
       <Route path='/How-to-trade-on-Ekonnet' element={<Question2/>}/>
       <Route path='/Paper-Trading-at-Ekonnet-test-learn-and-simulate-trading-strategies' element={<Question3/>}/>
       <Route path='/Ekonnet-Order-Types-and-Order-Options' element={<Question4/>}/>
       <Route path='/Understanding-Ekonnet-Over-the-Counter(OTC)' element={<Question5/>}/>
       <Route path='/How-to-check-you-are-paying-the-right-trading-fees-on-Ekonnet' element={<Question6/>}/>
       <Route path='/What-is-the-minimum-order-size-on-Ekonnet' element={<Question7/>}/>
       <Route path='/Order-and-Funding-Books-terms-on-Ekonnet' element={<Question8/>}/>
       <Route path='/The-Ekonnet-Chart-Layout-Customisation-&-Ekonnet-Trade-Desk' element={<Question9/>}/>
       <Route path='/Customisation-on-Ekonnet' element={<Question10/>}/>
       <Route path='/Bitcoin(Satoshi)-Mode' element={<Question11/>}/>
       <Route path='/Ekonnet-Interface-loading-issues-Frequently-Asked-Questions(FAQ)' element={<Question12/>}/>
       <Route path='/Price-alert-setting-on-Ekonnet' element={<Question13/>}/>
       <Route path='/What-is-a-settlement-on-Ekonnet' element={<Question14/>}/>
       <Route path='/Why-are-BTC-profits-on-Ekonnet' element={<Question15/>}/>
       <Route path='/Trading-Error-Message' element={<Question16/>}/>
       <Route path='/Editing-orders-and-viewing-order-history-in-bulk' element={<Question17/>}/>
       <Route path='/How-is-precision-calculated-using-significant-digits-on-Ekonnet' element={<Question18/>}/>
       <Route path='/Orders-execution-on-Ekonnet' element={<Question19/>}/>
       <Route path='/Why-a-stop-order-might-not-be-filled-at-the-stop-price-on-Ekonnet' element={<Question20/>}/>
       <Route path='/Chain-Split-Tokens-and-Token-Manager-on-Ekonnet' element={<Question21/>}/>  */}
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
       <Route path='/ekonnet-terminal' element={<Terminal/>}/>
       <Route path='/bug-bounty' element={<Bugbounty/>}/>
       <Route path='/terminal-page' element={<Terminalpage/>}/>
       <Route path='/terminal1' element={<Terminal1/>}/>
       <Route path='/terminal2' element={<Terminal2/>}/>
       <Route path='/terminal3' element={<Terminal3/>}/>
       <Route path='/terminal4' element={<Terminal4/>}/>
       <Route path='/terminal5' element={<Terminal5/>}/>
       <Route path='/terminal6' element={<Terminal6/>}/>
       <Route path='/terminal7' element={<Terminal7/>}/>
       <Route path='/terminal8' element={<Terminal8/>}/>
       <Route path='/terminal9' element={<Terminal9/>}/>
       <Route path='/terminal10' element={<Terminal10/>}/>
       <Route path='/terminal11' element={<Terminal11/>}/>
       <Route path='/terminal12' element={<Terminal12/>}/>
       <Route path='/terminal13' element={<Terminal13/>}/>
       <Route path='/terminal14' element={<Terminal14/>}/>
       <Route path='/tell-a-friend' element={<TellFriend/>}/>
       <Route path='/best' element={<Best/>}/>
       <Route path='/corporate-professional' element={<Corporate/>}/>
       <Route path='/margin-trades' element={<Margintrades/>}/>
       <Route path='/margin-funding' element={<Marginfunding/>}/>
       <Route path='/exchange-trades' element={<Exchangetrades/>}/>
       <Route path='/market-order' element={<MarketOrder/>}/>
       <Route path='/active-book-order' element={<BookOrder/>}/>
       <Route path='/fill-or-kill-order' element={<FillOrder/>}/>
       <Route path='/immediate-cancellation-order' element={<ImmediateOrder/>}/>
       <Route path='/limit-order' element={<LimitOrder/>}/>
       <Route path='/scaled-pro-order' element={<ProOrder/>}/>
       <Route path='/stop-limit-order' element={<StopLimitOrder/>}/>
       <Route path='/stop-order' element={<StopOrder/>}/>
       <Route path='/trailing-limit-order' element={<TrailingOrder/>}/>
       <Route path='/user-dashboard-home' element={<UserDashboardHome/>}/>
       <Route path='/user-derivatives-home' element={<UserDerivativesHome/>}/>
       <Route path='/user-funding-home' element={<UserFundingHome/>}/>
       <Route path='/user-lending-home' element={<UserLendingHome/>}/>
       <Route path='/user-otc-home' element={<UserOtcHome/>}/>
       <Route path='/user-lending-product-home' element={<UserLendingProductHome/>}/>
       <Route path='/user-account' element={<UserAccount/>}/>
       <Route path='/user-sub-account' element={<UserSubAccount/>}/>
       <Route path='/user-security-account' element={<UserSecurityAccount/>}/>
       <Route path='/user-address-book' element={<UserAddressBook/>}/>
       <Route path='/user-date-and-time' element={<UserDateAndTime/>}/>
       <Route path='/user-fees' element={<UserFees/>}/>
       <Route path='/user-funding' element={<UserFunding/>}/>
       <Route path='/user-account-info' element={<UserAccountInfo/>}/>
       <Route path='/user-notification' element={<UserNotification/>}/>
       <Route path='/user-email' element={<UserEmail/>}/>
       <Route path='/user-sound-alert' element={<UserSoundAlert/>}/>
       <Route path='/user-interface' element={<UserInterface/>}/>
       <Route path='/user-layout' element={<UserLayout/>}/>
       <Route path='/user-tickers' element={<UserTickers/>}/>
       <Route path='/user-order-book' element={<UserOrderBook/>}/>
       <Route path='/user-theme' element={<UserTheme/>}/>
       <Route path='/user-security' element={<UserSecurity/>}/>
       <Route path='/user-api' element={<UserApi/>}/>
       <Route path='/user-create-new-key' element={<UserCreateNewKey/>}/>
       <Route path='/user-my-api-key' element={<UserMyApiKey/>}/>
       <Route path='/user-affiliate' element={<UserAffiliate/>}/>
       <Route path='/frequently-asked-question' element={<FAQ/>}/>
       <Route path='/token-deposite' element={<TokenDeposite/>}/>
       <Route path='/token-withdrawals' element={<TokenWithdrawals/>}/>
       <Route path='/bank-wires' element={<BankWires/>}/>
       <Route path='/account-access' element={<AccountAccess/>}/>
       <Route path='/account-setting' element={<AccountSetting/>}/>
       <Route path='/verification' element={<Verification/>}/>
       <Route path='/trading-and-funding' element={<TradingAndFunding/>}/>
       <Route path='/application-programming-interface' element={<ApplicationProgrammingInterface/>}/>
       <Route path='/bug-reporting' element={<BugReporting/>}/>
       <Route path='/security-concern' element={<SecurityConcern/>}/>
       <Route path='/partnership' element={<Partnership/>}/>
       <Route path='/other-issues' element={<OtherIssues/>}/>
       <Route path='/mobile-application' element={<MobileApplication/>}/>
       <Route path='/forks-and-airdrops' element={<ForksAndAirdrops/>}/>
       <Route path='/captcha' element={<Captcha/>}/>
       <Route path='/account-accessess' element={<AccountAccessess/>}/>
       <Route path='/lost-access-to-google-authenticator-2fa-of-a-ekonnet-account' element={<LostAccess/>}/>
       <Route path='/how-to-reset-change-your-ekonnet-password' element={<ResetPassword/>}/>
       <Route path='/what-is the-invalid-token-message' element={<Token/>}/>
       <Route path='/verifications' element={<Verfications/>}/>
       <Route path='/verification-levels-at-ekonnet' element={<Verification1/>}/>
       <Route path='/how-to-verify-an-individual-ekonnet-account' element={<Verification2/>}/>
       <Route path='/how-to-verify-a-corporate-account-on-ekonnet' element={<Verification3/>}/>
       <Route path='/how-long-does-ekonnet-verification-take' element={<Verification4/>}/>
       <Route path='/verification-frequently-asked-questions(FAQ)' element={<Verification5/>}/>
       <Route path='/ekonnet-master-and-sub-accounts' element={<Verification6/>}/>
       <Route path='/reports' element={<Report/>}/>
       <Route path='/what-are-my-orders-reports' element={<Report1/>}/>
       <Route path='/what-is-positions-on-ekonnet-report' element={<Report2/>}/>
       <Route path='/what-is-a-ekonnet-report' element={<Report3/>}/>
       <Route path='/what-is-a-funding-report-on-ekonnet' element={<Report4/>}/>
       <Route path='/what-are-my-trades-reports' element={<Report5/>}/>
       <Route path='/what-is-my-wallet-history-on-ekonnet' element={<Report6/>}/>
       <Route path='/what-is-my-movements-report-at-ekonnet' element={<Report7/>}/>
       <Route path='/full-tax-report-ekonnet-reporting-application' element={<Report8/>}/>
       <Route path='/trading-overviews' element={<Trading/>}/>
       <Route path='/currency-conversion-tool-on-ekonnet' element={<Trading1/>}/>
       <Route path='/how-to-trade-on-ekonnet' element={<Trading2/>}/>
       <Route path='/paper-trading-at-ekonnet-test-learn-and-simulate-trading-strategies' element={<Trading3/>}/>
       <Route path='/ekonnet-order-types-and-order-options' element={<Trading4/>}/>
       <Route path='/understanding-ekonnet-over-the-counter-(otc)' element={<Trading5/>}/>
       <Route path='/how-to-check-you-are-paying-the-right-trading-fees-on-ekonnet' element={<Trading6/>}/>
       <Route path='/what-is-the-minimum-order-size-on-ekonnet' element={<Trading7/>}/>
       <Route path='/order-and-funding-books-terms-on-ekonnet' element={<Trading8/>}/>
       <Route path='/the-ekonnet-chart-layout-customisation-and-ekonnet-trade-desk' element={<Trading9/>}/>
       <Route path='/customisation-on-ekonnet' element={<Trading10/>}/>
       <Route path='/ekonnet-satoshi-mode' element={<Trading11/>}/>
       <Route path='/ekonnet-interface-loading-issues-frequently-asked-questions' element={<Trading12/>}/>
       <Route path='/price-alert-setting-on-ekonnet' element={<Trading13/>}/>
       <Route path='/what-is-a-settlement-on-ekonnet' element={<Trading14/>}/>
       <Route path='/why-are-btc-profits-on-ekonnet-account-converted-to-usd-when-the-margin-position-is-closed' element={<Trading15/>}/>
       <Route path='/trading-error-message' element={<Trading16/>}/>
       <Route path='/editing-orders-and-viewing-order-history-in-bulk' element={<Trading17/>}/>
       <Route path='/how-is-precision-calculated-using-significant-digits-on-ekonnet' element={<Trading18/>}/>
       <Route path='/orders-execution-on-ekonnet' element={<Trading19/>}/>
       <Route path='/why-a-stop-order-might-not-be-filled-at-the-stop-price-on-ekonnet' element={<Trading20/>}/>
       <Route path='/chain-split-tokens-and-token-manager-on-ekonnet' element={<Trading21/>}/>
       <Route path='/margin-trading' element={<Margin/>}/>
       <Route path='/What-is-Margin-Trading-on-Ekonnet' element={<Margin1/>}/>
       <Route path='/How-to-open-close-a-margin-position-at-Ekonnet' element={<Margin2/>}/>
       <Route path='/What-interest-rate-is-charged-on-margin-positions-on-Ekonnet' element={<Margin3/>}/>
       <Route path='/How-to-claim-a-margin-position-on-Ekonnet' element={<Margin4/>}/>
       <Route path='/Margin-call-policy-on-Ekonnet' element={<Margin5/>}/>
       <Route path='/What-happens-to-a-Ekonnet-margin-position-if-the-underlying-funds-become-unavailable' element={<Margin6/>}/>
       <Route path='/Margin-Funding-on-Ekonnet' element={<Margin7/>}/>
       <Route path='/Is-it-possible-to-open-multiple-Margin-Trading-positions-for-the-same-pair-on-Ekonnet' element={<Margin8/>}/>
       <Route path='/What-is-the-base-price-at-Ekonnet' element={<Margin9/>}/>
       <Route path='/How-to-replace-funding-in-a-margin-position' element={<Margin10/>}/>
       <Route path='/Using-Reserved-Funding-for-a-position-on-Ekonnet' element={<Margin11/>}/>
       <Route path='/The-error-message-Insufficient-Balance-on-Ekonnet' element={<Margin12/>}/>
       <Route path='/derivatives' element={<Derivative/>}/>
       <Route path='/How-to-move-funds-to-the-Derivatives-wallet' element={<Derivative1/>}/>
       <Route path='/Derivatives-Trading-on-Ekonnet' element={<Derivative2/>}/>
       <Route path='/The-Ekonnet-Derivatives-trading-interface' element={<Derivative3/>}/>
       <Route path='/What-is-Termination-on-Ekonnet' element={<Derivative4/>}/>
       <Route path='/fee' element={<Fee/>}/>
       <Route path='/How-to-pay-less-trading-fees-at-Ekonnet' element={<Fee1/>}/>
       <Route path='/What-fees-does-Ekonnet-charge' element={<Fee2/>}/>
       <Route path='/Ekonnet-Fees' element={<Fee3/>}/>
       <Route path='/Does-Ekonnet-offer-traders-preferential-fee-discounts' element={<Fee4/>}/>
       <Route path='/ekonnet-honey' element={<Honey/>}/>
       <Route path='/Ekonnet-Honey-Algorithmic-Orders' element={<Honey1/>}/>
       <Route path='/Ekonet-Honey' element={<Honey2/>}/>
       <Route path='/Deposits-Withdrawals' element={<Depos/>}/>
       <Route path='/Security' element={<Secure/>}/>
       <Route path='/Oder-Type-and-Order-Option' element={<Order/>}/>
       <Route path='/Lending' element={<Lend/>}/>
       <Route path='/Mobiles' element={<Mob/>}/>
       <Route path='/Currencies-and-Token' element={<Currencies/>}/>
       <Route path='/Other-Resources' element={<Resource/>}/>
       <Route path='/forgot-password' element={<ForgetPassword/>}/>


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
