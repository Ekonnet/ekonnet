import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Route,Routes,Link} from "react-router-dom";

// import Home from './components/Home/Home';
// import BuyCrypto from './components/BuyCrypto/BuyCrypto';
import OneClickBuy from './BuyCrypto/OneClickBuy';
import P2pTradingFees from './BuyCrypto/P2pTradingFees';
import FiatDeposite from './BuyCrypto/FiatDeposite';
import MarketOverview from './Markets/MarketOverview';
import Traders from './Traders/Traders';
import Features from './Traders/Features';
import MobileApp from './Traders/MobileApp';
import Wallets from './Traders/Wallets';
import Security from './Traders/Security';
import Explore from './Explore/Explore';
import Future from  './Future/Future';
import SignUp from './Login/SignUp';
import SignIn from './Login/SignIn';

import MarketData from './Markets/MarketData';



function HeaderNav() {
  return (
    
   <>
    <Navbar className='navbg' expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to={"/"} className='logo'>Ekonnet.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto main-nav">
            
            <NavDropdown title="Buy Crypto" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/one-click-buy"}>One-Click Buy</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to={"/p2p-trading-Fees"}>
                P2P Trading(0 Fees)
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to={"/fiat-deposite"}>Fiat Deposite</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Markets" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/market-overview"}>Market Overview</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to={"/market-data"}>
               Market Data
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to={"/future"}>Future</Nav.Link>
            <NavDropdown title="Traders" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/features"}>Features</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to={"/mobile-app"}>
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
            <Nav.Link as={Link} to={"/explore"}>Explore</Nav.Link>
          </Nav>
          <Nav.Link className='login' as={Link} to={"/signup"}>Sign Up</Nav.Link>
          <Nav.Link className='login' as={Link} to={"/signin"}>Sign In</Nav.Link>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  

    <div>
      <Routes>
       
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
      
        <Route path="/market-data" element={<MarketData/>}/>
      
      </Routes>
    </div>
    </>
  );
}

export default HeaderNav;