import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";

// import Home from './components/Home/Home';
// import BuyCrypto from './components/BuyCrypto/BuyCrypto';




function HeaderNav() {
  return (
    
   <>
    <Navbar className='navbg' expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to={"/"} className='logo'>Ekonnet.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto main-nav">
          <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
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
              <NavDropdown.Item as={Link} to={"/wallets"}>
               Wallet
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link as={Link} to={"/explore"}>Explore</Nav.Link> */}
            <Nav.Link as={Link} to={"/affiliate"}>Affiliate</Nav.Link>
            <Nav.Link as={Link} to={"/about"}>About Us</Nav.Link>
            
          </Nav>
         
          <Button  href="/sign-up" className='nav-btn'>Sign Up</Button>
          <Button href="/sign-in" variant="outline-info">Sign In</Button>
          {/* <Nav.Link className='login' as={Link} to={"/signup"}>Sign Up</Nav.Link> */}
          {/* <Nav.Link className='login' as={Link} to={"/signin"}>Sign In</Nav.Link> */}

        </Navbar.Collapse>
      </Container>
    </Navbar>
  

    <div>
    
    </div>
    </>
  );
}

export default HeaderNav;