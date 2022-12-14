import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

import Home from './components/Home/Home';
// import BuyCrypto from './components/BuyCrypto/BuyCrypto';
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



function HeaderNav() {
  return (
    <Router>
    <div>
    <Navbar bg="danger" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={"/"} className='d-flex justify-content-between'>Ekonnet.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <NavDropdown title="Buy Crypto" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/one_click_buy"}>One-Click Buy</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to={"/p2p_trading_Fees"}>
                P2P Trading(0 Fees)
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to={"/fiat_deposite"}>Fiat Deposite</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Markets" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/market_overview"}>Market Overview</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to={"/market_data"}>
               Market Data
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to={"/future"}>Future</Nav.Link>
            <NavDropdown title="Traders" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/features"}>Features</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to={"/mobile_app"}>
               Mobile App
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to={"/security"}>
               Security
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to={"/wallet"}>
               Wallet
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/one-click-buy" element={<OneClickBuy/>}/> 
        <Route path="/p2p-trading" element={<P2pTradingFees/>}/>
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
        <Route path="/markets" element={<Markets/>}/>
        <Route path="/market-data" element={<MarketData/>}/>
        

      </Routes>
    </div>
    </Router>
  );
}

export default HeaderNav;